<template>
  <div id="app">
    <!-- Top Navbar -->
    <top-navbar id="top-navbar"></top-navbar>

    <!-- Windows -->
    <div class="screen" id="screen" @click="deinitWindows">
      <div
        v-for="window in windows"
        :key="window.key"
        :aria-label="window.displayName"
      >
        <component
          :is="window.windowComponent"
          :nameOfWindow="window.windowId"
          :content_padding_bottom="windowPadding(window, 'bottom')"
          :content_padding_left="windowPadding(window, 'left')"
          :content_padding_right="windowPadding(window, 'right')"
          :content_padding_top="windowPadding(window, 'top')"
          :id="window.windowId"
          :style="windowStyle(window)"
          :folderContent="window.folderContent"
          :folderSize="window.folderSize"
          v-if="windowCheck(window.windowId)"
        >
          <component :is="window.windowContent" slot="content"></component>
        </component>
      </div>
      <app-grid></app-grid>
    </div>

    <!-- Start menu & Navbar -->
    <StartMenu
      v-if="$store.getters.getActiveWindow === 'Menu'"
      style="position: absolute; z-index: 9999; left: 0; bottom: 30px"
    ></StartMenu>
    <navbar
      style="position: absolute; bottom: 0; z-index: 9999"
      id="navbar"
    ></navbar>

    <!-- Popup messages -->
    <Popup v-if="showDefaultPopup" :message="defaultPopupMessage" />
    <Popup v-if="isMobile && showMobilePopup" :message="mobilePopupMessage" />
    <Popup
      v-if="mailSent && showMailSentPopup"
      :message="mailSentPopupMessage"
    />
  </div>
</template>

<script>
import Notepad from "./components/windows/notepad";
import Explorer from "./components/windows/explorer";
import Navbar from "./components/template/Navbar";
import AppGrid from "./components/template/AppGrid";
import Window from "./components/template/Window";
import StartMenu from "./components/template/StartMenu";
import Popup from "./components/template/Popup";
import Bio from "./components/views/Bio";
import Resume from "./components/views/Resume";
import Projects from "./components/views/Projects";
import Publications from "./components/views/Publications";
import Certifications from "./components/views/Certifications";
import Educations from "./components/views/Educations";
import Experiences from "./components/views/Experiences";
import Skills from "./components/views/Skills";
import Mail from "./components/views/Mail";
import Quantium from "./components/windows/projects/data_analysis/quantium";

export default {
  name: "App",
  data() {
    return {
      windows: this.$store.getters.getWindows,
      windowComponents: {},
      defaultPopupMessage: "Click and drag windows to interact",
      mobilePopupMessage:
        "Access the site from a desktop for the best experience",
      mailSentPopupMessage: "Mail has been sent!",
    };
  },
  components: {
    Notepad,
    Explorer,
    Navbar,
    AppGrid,
    Window,
    StartMenu,
    Popup,
    Bio,
    Resume,
    Projects,
    Publications,
    Certifications,
    Mail,
    Educations,
    Experiences,
    Skills,
    Quantium,
  },
  computed: {
    style() {
      return {
        "--fullscreen": this.$store.getters.getFullscreenWindowHeight,
      };
    },
    isMobile() {
      return window.innerWidth <= 768;
    },
    isDesktop() {
      return window.innerWidth >= 768;
    },
    showDefaultPopup() {
      return this.isDesktop;
    },
    showMobilePopup() {
      return this.isMobile;
    },
    mailSent() {
      return this.$store.state.mailSent;
    },
    showMailSentPopup() {
      return this.mailSent;
    },
  },
  mounted() {
    this.updateScreenHeight();

    window.addEventListener("resize", this.updateScreenHeight);
    window.addEventListener("resize", this.resetHeight);

    if (this.isMobile) {
      this.$store.dispatch("setAllWindowsFullscreen", true);
    } else {
      this.openWindow("biographyWindow");
    }
  },
  methods: {
    windowPadding(window, side) {
      return this.isMobile
        ? window.windowContentPadding.mobile?.[side] ??
            window.windowContentPadding[side]
        : window.windowContentPadding[side];
    },
    windowStyle(window) {
      return {
        position: window.position,
        left: this.isMobile ? window.positionXMobile : window.positionX,
        top: this.isMobile ? window.positionYMobile : window.positionY,
      };
    },
    openWindow(windowId) {
      const payload = {
        windowState: "open",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
    windowCheck(windowId) {
      return this.$store.getters.getWindowById(windowId).windowState === "open";
    },
    deinitWindows() {
      if (this.$store.getters.getActiveWindow === "Menu") {
        this.$store.commit("setActiveWindow", "");
        setTimeout(() => {
          this.$store.commit("zIndexIncrement", "");
        }, 0);
      }
    },
    updateScreenHeight() {
      const navbar = document.getElementById("navbar");
      const topnavbar = document.getElementById("top-navbar");
      const topNavbarHeight = topnavbar.clientHeight;
      const navbarHeight = navbar.clientHeight;

      document.getElementById("screen").style.height =
        window.innerHeight - navbarHeight - topNavbarHeight + "px";
    },
    resetHeight() {
      document.body.style.height = window.innerHeight + "px";
      document.documentElement.style.height = window.innerHeight + "px";
    },
  },
};
</script>

<style>
@import "./assets/css/utils/normalize.css";
@import "./assets/css/windows/app.css";
@import "./assets/css/windows/window.css";
@import "./assets/css/windows/appgrid.css";
@import "./assets/css/windows/tabs.css";

@font-face {
  font-family: "MS Sans Serif";
  src: url("~@/assets/fonts/MS-Sans-Serif.ttf");
}

html {
  overflow: hidden;
}

#app {
  font-family: "MS Sans Serif";
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
}

.screen {
  width: 100%;
  position: relative;
  z-index: 999;
}

::-webkit-scrollbar {
  width: 15px;
  background: repeating-conic-gradient(
      rgb(189, 190, 189) 0% 25%,
      rgb(255, 255, 255) 0% 50%
    )
    50% / 2px 2px;
}

::-webkit-scrollbar-thumb {
  background: rgb(189, 190, 189);
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  outline: rgb(219, 219, 219);
}

@media only screen and (max-width: 600px) {
  ::-webkit-scrollbar {
    width: 10px;
    background: repeating-conic-gradient(
        rgb(189, 190, 189) 0% 25%,
        rgb(255, 255, 255) 0% 50%
      )
      50% / 2px 2px;
  }
}

.fullscreen {
  left: 0 !important;
  position: relative;
  display: block;
  top: 0 !important;
  right: 0 !important;
}
</style>
