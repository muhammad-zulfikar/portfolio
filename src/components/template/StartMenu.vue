<template>
  <div class="start-menu__container">
    <div class="start-menu">
      <div class="start-menu__stripe">
        <span class="start-menu__stripe-text">
          Muhammad&nbsp;&nbsp;<b>Zulfikar</b>
        </span>
      </div>
      <div class="start-menu__menu">
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/ShutDown.png" alt="Shut Down">
          <span class="start-menu__item-text">Shut Down...</span>
        </div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/LogOff.png" alt="Log Off">
          <span class="start-menu__item-text">Log Off...</span>
        </div>
        <div class="start-menu__divider"></div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/Run.png" alt="Run">
          <span class="start-menu__item-text">Run...</span>
        </div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/Help.png" alt="Help">
          <span class="start-menu__item-text">Help</span>
        </div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/Find.png" alt="Find">
          <span class="start-menu__item-text">Find</span>
          <img src="@/assets/icons/img/startmenu/MenuIndicator.png" alt="Menu" class="start-menu__item-menu-indicator">
        </div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/Settings.png" alt="Settings">
          <span class="start-menu__item-text">Settings</span>
          <img src="@/assets/icons/img/startmenu/MenuIndicator.png" alt="Menu" class="start-menu__item-menu-indicator">
        </div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/Documents.png" alt="Documents">
          <span class="start-menu__item-text">Documents</span>
          <img src="@/assets/icons/img/startmenu/MenuIndicator.png" alt="Menu" class="start-menu__item-menu-indicator">
          <div class="start-menu__submenu-container">
            <div class="start-menu__submenu">
              <div class="start-menu__submenu-item">
                <img class="start-menu__submenu-icon" src="@/assets/icons/img/startmenu/SubFolder.png" alt="SubFolder">
                <span>Contact Info</span>
                <img src="@/assets/icons/img/startmenu/MenuIndicator.png" alt="Menu"
                  class="start-menu__item-menu-indicator">
                <div class="start-menu__submenu-container">
                  <div class="start-menu__submenu">
                    <a href="mailto:muhammad-zulfikar@duck.com" target="_blank" rel="noopener">
                      <div class="start-menu__submenu-item">
                        <img class="start-menu__submenu-icon" src="@/assets/icons/img/taskbar/OutlookExpress.png"
                          alt="Email">
                        <span>Email</span>
                      </div>
                    </a>
                    <a href="https://wa.me/+6285156453730" target="_blank" rel="noopener">
                      <div class="start-menu__submenu-item">
                        <img class="start-menu__submenu-icon" src="@/assets/icons/social/whatsapp.png" alt="IE">
                        <span>WhatsApp</span>
                      </div>
                    </a>
                    <a href="https://telegram.com/spookies/" target="_blank" rel="noopener">
                      <div class="start-menu__submenu-item">
                        <img class="start-menu__submenu-icon" src="@/assets/icons/social/telegram.png" alt="IE">
                        <span>Telegram</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <a href="https://github.com/muhammad-zulfikar/" target="_blank" rel="noopener">
                <div class="start-menu__submenu-item">
                  <img class="start-menu__submenu-icon" src="@/assets/icons/social/github.png" alt="IE">
                  <span>GitHub</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-zulfikar-076a7b227" target="_blank" rel="noopener">
                <div class="start-menu__submenu-item">
                  <img class="start-menu__submenu-icon" src="@/assets/icons/social/linkedin.png" alt="IE">
                  <span>LinkedIn</span>
                </div>
              </a>
              <a href="https://www.kaggle.com/zulfikarmuhammad/" target="_blank" rel="noopener">
                <div class="start-menu__submenu-item">
                  <img class="start-menu__submenu-icon" src="@/assets/icons/social/kaggle.png" alt="IE">
                  <span>Kaggle</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="start-menu__item">
          <img class="start-menu__icon" src="@/assets/icons/img/startmenu/Programs.png" alt="Programs">
          <span class="start-menu__item-text">Programs</span>
          <img src="@/assets/icons/img/startmenu/MenuIndicator.png" alt="Menu" class="start-menu__item-menu-indicator">
          <div class="start-menu__submenu-container">
            <div class="start-menu__submenu">
              <div class="start-menu__submenu-item">
                <img class="start-menu__submenu-icon" src="@/assets/icons/img/startmenu/SubFolder.png" alt="SubFolder">
                <span>Accessories</span>
                <img src="@/assets/icons/img/startmenu/MenuIndicator.png" alt="Menu"
                  class="start-menu__item-menu-indicator">
                <div class="start-menu__submenu-container">
                  <div class="start-menu__submenu">
                    <div class="start-menu__submenu-item" @click="openWindow('notepadWindow')">
                      <img class="start-menu__submenu-icon" src="@/assets/icons/win95/notepad.png" alt="Text File">
                      <span>Notepad</span>
                    </div>
                    <div class="start-menu__submenu-item" @click="openWindow('explorerWindow')">
                      <img class="start-menu__submenu-icon" src="@/assets/icons/win95/folder.png" alt="Text File">
                      <span>Explorer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('biographyWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/bio.png" alt="Text File">
                <span>Biography</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('resumeWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/text.png" alt="Text File">
                <span>Resume</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('projectsWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/projects.png" alt="Text File">
                <span>Projects</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('skillsWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/skills.png" alt="Text File">
                <span>Skills</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('experiencesWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/experiences.png" alt="Text File">
                <span>Experiences</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('educationsWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/educations.png" alt="Text File">
                <span>Educations</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('certificationsWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/certifications.png" alt="Text File">
                <span>Certifications</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('publicationsWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/resume.png" alt="Text File">
                <span>Publications</span>
              </div>
              <div class="start-menu__submenu-item" @click="openWindow('mailWindow')">
                <img class="start-menu__submenu-icon" src="@/assets/icons/win95/mail.png" alt="Text File">
                <span>Mail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGrid",
  data: function () {
    return {
      windows: this.$store.getters.getWindows,
      gridHeight: "",
    };
  },
  methods: {
    openWindow(windowId) {
      const payload = {
        windowState: "open",
        windowID: windowId,
      };
      this.$store.commit("setWindowState", payload);
    },
  },
  mounted() {
    let gridH = this.$store.getters.getFullscreenWindowHeight;
    this.gridHeight = gridH.substring(0, gridH.length - 2) - 60 + "px";
  },
};
</script>

<style scoped>
@import '@/assets/css/windows/StartMenu.css';

/* --- START MENU --- */
/* .start-menu__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  font-size: 13px;
  border: 5px solid black;
  width: 165px;
  height: 325px;
} */

.start-menu {
  position: fixed;
  bottom: 35px;
  left: 0;
  font-size: 13px;
  background-color: var(--gray);
  min-height: 100px;
  width: 175px;
  box-shadow: var(--inset);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  padding: 2px;
  -webkit-user-select: none;
  user-select: none;
}

.start-menu__stripe {
  background: rgb(138, 136, 136);
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1em;
}

.start-menu__stripe-text {
  transform: rotate(270deg);
  color: white;
}

.start-menu__menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  justify-content: flex-start;
}

.start-menu__menu a {
  text-decoration: none;
  color: black;
}

.start-menu__item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 6px;
  margin: 1px 0;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.start-menu__icon {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.start-menu__item-text {
  flex-grow: 1;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
  margin-top: 5px;
}

.start-menu__item:hover {
  background-color: navy;
  color: white;
}

.start-menu__item:last-child {
  margin-top: 0px;
}

.start-menu__item-menu-indicator {
  width: 4px;
  height: 7px;
}

.start-menu__item:hover>.start-menu__item-menu-indicator {
  filter: invert();
}

.start-menu__divider {
  border-bottom: 1px solid white;
  border-top: 1px solid gray;
  margin: 2px 2px;
}


.start-menu__item>.start-menu__submenu-container>.start-menu__submenu {
  top: -8px;
  left: 4px;
}

.start-menu__submenu-container {
  position: relative;
  width: 0;
  height: 16px;
  opacity: 0;
  pointer-events: none;
}

.start-menu__item:hover>.start-menu__submenu-container,
.start-menu__submenu-item:hover>.start-menu__submenu-container {
  opacity: 1;
  pointer-events: initial;
}

.start-menu__submenu {
  position: absolute;
  top: -4px;
  left: 0px;
  min-width: 130px;
  box-shadow: var(--inset);
  background-color: var(--gray);
  color: black;
  padding: 2px;
}

.start-menu__submenu-item {
  padding: 2px 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
  font-size: 13px;
}

.start-menu__submenu-item>.start-menu__submenu-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.start-menu__submenu-item>span {
  flex-grow: 1;
  margin-top: 5px;
  cursor: url('@/assets/cursor/pointer.cur'), auto !important;
}

.start-menu__submenu-item:hover {
  color: white;
  background-color: navy;
}

/* Media Query */
@media (max-width: 600px) {
  .start-menu__submenu-item {
    padding: 3px;
  }
}
</style>
