<template>
  <nav class="navbar-container">
    <div
      alt="start"
      class="start-menu"
      v-on:click="toggleStartMenu"
      :class="
        $store.getters.getActiveWindow == 'Menu'
          ? 'start-menu-depressed'
          : 'start-menu'
      "
    >
      <div
        class=""
        :class="
          $store.getters.getActiveWindow == 'Menu'
            ? 'border'
            : 'container-border'
        "
      >
        <img class="start-icon" src="@/assets/icons/win95/win95.png" />
        <button
          style="
            padding-left: 3px;
            padding-top: 4.5px;
            font-size: 0.9rem;
            font-weight: bold;
          "
        >
          <label>Start</label>
        </button>
      </div>
    </div>
    <div v-for="window in this.activeWindows" :key="window.key">
      <button
        v-if="
          $store.getters.getActiveWindow !== window.windowId &&
          (window.windowState == 'open' || window.windowState == 'minimize')
        "
        v-on:click="openWindow(window.windowId)"
        class="navbar-item open"
      >
        <img
          class="icon-image"
          :src="require('@/assets/icons/win95/' + window.iconImage)"
          :alt="window.altText"
        />
        <p>{{ window.displayName }}</p>
      </button>
      <button
        v-if="$store.getters.getActiveWindow == window.windowId"
        v-on:click="minimizeOrOpenWindow(window.windowId)"
        class="navbar-item-depressed"
      >
        <img
          class="icon-image"
          :src="require('@/assets/icons/win95/' + window.iconImage)"
          :alt="window.altText"
        />
        <p>{{ window.displayName }}</p>
      </button>
    </div>
    <div class="spacer"></div>
    <div alt="time" class="time">
      <img src="@/assets/icons/win95/speakers.png" class="icon-image speaker" />
      <time>
        {{ time }}
      </time>
    </div>
  </nav>
</template>

<script>
import moment from "moment";
export default {
  name: "Navbar",
  data: function () {
    return {
      activeWindows: this.$store.getters.getActiveWindows,

      // date time for moment.js
      time: "",
      date: "",
    };
  },
  beforeMount() {
    setInterval(() => {
      this.time = moment().format("hh:mm A");
    }, 1000);
    setInterval(() => {
      this.date = moment().format("ddd DD MMMM");
    }, 1000);
  },
  methods: {
    toggleStartMenu() {
      const activeWindowId = this.$store.getters.getActiveWindow;
      if (activeWindowId === "Menu") {
        this.$store.commit("setActiveWindow", null);
      } else {
        this.$store.commit("setActiveWindow", "Menu");
      }
    },
    openWindow(windowId) {
      const payload = {
        windowState: "open",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
    minimizeWindow(windowId) {
      const payload = {
        windowState: "minimize",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
    minimizeOrOpenWindow(windowId) {
      const activeWindowId = this.$store.getters.getActiveWindow;
      if (activeWindowId === windowId) {
        this.minimizeWindow(windowId);
      } else {
        this.openWindow(windowId);
      }
    },
  },
};
</script>

<style scoped>
/* Container */
.navbar-container {
  width: 100%;
  height: 35px;
  background: rgb(192, 192, 192);
  border-top: solid rgb(250, 250, 250) 2px;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
}

/* Navbar Items */
.navbar-item {
  width: 100px;
  height: 26.5px;
  border-radius: 10px;
  margin-left: 2px;
  margin-right: 2px;
  box-shadow: 1.5px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  background: rgb(192, 192, 192);
  border-radius: 0.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center !important;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: bold;
  font-size: 0.7rem;
}

.navbar-item:active {
  background: rgb(192, 192, 192);
  box-shadow: none;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
}

.navbar-item:hover {
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.navbar-item-depressed {
  width: 100px;
  height: 28px;
  border-radius: 10px;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 0.5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: bold;
  font-size: 0.7rem;
  background: rgb(192, 192, 192);
  box-shadow: none;
  background: repeating-conic-gradient(
      rgb(189, 190, 189) 0% 25%,
      rgb(255, 255, 255) 0% 50%
    )
    50% / 2px 2px;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.navbar-item img,
.navbar-item-depressed img {
  margin-top: 5px;
}

.start-icon {
  width: 18px;
  height: 18px;
}

.start-menu {
  width: 65px;
  margin: 5px;
  height: 25px;
  box-shadow: 1.5px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  background: rgb(192, 192, 192);
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-menu:hover {
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.start-menu:active {
  background: rgb(192, 192, 192);
  box-shadow: none;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
}

.start-menu-depressed {
  box-shadow: none;
  background: repeating-conic-gradient(
      rgb(189, 190, 189) 0% 25%,
      rgb(255, 255, 255) 0% 50%
    )
    50% / 2px 2px;
  border-top: solid rgb(0, 0, 0) 1.5px;
  border-left: solid rgb(0, 0, 0) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-right: solid rgb(250, 250, 250) 1.5px;
}

.container-border {
  display: flex;
  justify-content: center;
  align-items: center;
}

button,
img,
p,
label {
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.navbar-item p,
.navbar-item-depressed p {
  margin-top: 3px;
}

.border {
  display: flex;
  justify-content: center;
  align-items: center;
  border: black dotted 1px;
}

/* Utilities */
.icon-image {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-top: 0;
}

.icon-image.speaker {
  margin-top: 2.5px;
}

.spacer {
  flex-grow: 1;
}

.time {
  width: 75px;
  margin: 5px;
  height: 25px;
  background: rgb(192, 192, 192);
  border-right: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(250, 250, 250) 1.5px;
  border-top: solid rgb(90, 90, 90) 1.5px;
  border-left: solid rgb(90, 90, 90) 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 0.7em;
  padding-top: 2px;
}

@media only screen and (max-width: 700px) {
  p {
    display: none;
  }
  .time {
    width: auto !important;
    padding-left: 5px;
    padding-right: 5px;
  }
  .icon-image.speaker {
    width: 0px;
    height: 0px;
    margin-right: 0px;
  }
  .navbar-item {
    width: auto;
    padding-top: 0;
  }
  .navbar-item img {
    margin-left: 5px;
  }
  .navbar-item-depressed {
    width: auto;
    padding-top: 0;
  }
  .navbar-item-depressed img {
    margin-left: 5px;
  }
}

/*-------------------------------------------*\
      CSS Normalisation 
  \*-------------------------------------------*/

button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
}

p {
  margin: 0;
  margin-top: 2px;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
