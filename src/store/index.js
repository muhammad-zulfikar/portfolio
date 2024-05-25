import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Height of Fullscreen Window
    fullscreenWindowHeight: window.innerHeight + "px",

    // Active Window State
    activeWindow: "biographyWindow",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      // Biography //
      {
        windowId: "biographyWindow",
        windowState: "close",
        displayName: "Biography",
        windowComponent: "window",
        windowContent: "bio",
        windowContentPadding: {
          top: null,
          right: "70px",
          bottom: null,
          left: "70px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "25vw",
        positionY: "5vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "10vh", // Mobile specific position
        iconImage: "bio.png",
        altText: "Biography",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Resume //
      {
        windowId: "resumeWindow",
        windowState: "close",
        displayName: "Résumé",
        windowComponent: "window",
        windowContent: "resume",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          mobile: {
            top: "0", // Mobile specific padding
            right: "0", // Mobile specific padding
            bottom: "0", // Mobile specific padding
            left: "0", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "10vw",
        positionY: "0vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "6vh", // Mobile specific position
        iconImage: "text.png",
        altText: "Résumé",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Projects //
      {
        windowId: "projectsWindow",
        windowState: "close",
        displayName: "Projects",
        windowComponent: "window",
        windowContent: "projects",
        windowContentPadding: {
          top: null,
          right: "20px",
          bottom: null,
          left: "20px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "13vw",
        positionY: "5vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "10vh", // Mobile specific position
        iconImage: "projects.png",
        altText: "Projects",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Skills //
      {
        windowId: "skillsWindow",
        windowState: "close",
        displayName: "Skills",
        windowComponent: "window",
        windowContent: "Skills",
        windowContentPadding: {
          top: null,
          right: "50px",
          bottom: null,
          left: "50px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "16vw",
        positionY: "10vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "14vh", // Mobile specific position
        iconImage: "skills.png",
        altText: "Skills",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Experiences //
      {
        windowId: "experiencesWindow",
        windowState: "close",
        displayName: "Experiences",
        windowComponent: "window",
        windowContent: "Experiences",
        windowContentPadding: {
          top: null,
          right: "50px",
          bottom: null,
          left: "50px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "19vw",
        positionY: "15vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "18vh", // Mobile specific position
        iconImage: "experiences.png",
        altText: "Experiences",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Educations //
      {
        windowId: "educationsWindow",
        windowState: "close",
        displayName: "Educations",
        windowComponent: "window",
        windowContent: "Educations",
        windowContentPadding: {
          top: null,
          right: "50px",
          bottom: null,
          left: "50px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "30vw",
        positionY: "10vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "22vh", // Mobile specific position
        iconImage: "educations.png",
        altText: "Educations",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Certifications //
      {
        windowId: "certificationsWindow",
        windowState: "close",
        displayName: "Certifications",
        windowComponent: "window",
        windowContent: "certifications",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "20vw",
        positionY: "20vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "26vh", // Mobile specific position
        iconImage: "certifications.png",
        altText: "Certifications",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Publications //
      {
        windowId: "publicationsWindow",
        windowState: "close",
        displayName: "Publications",
        windowComponent: "window",
        windowContent: "publications",
        windowContentPadding: {
          top: null,
          right: "20px",
          bottom: null,
          left: "20px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: null, // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "23.6vw",
        positionY: "9.5vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "30vh", // Mobile specific position
        iconImage: "printer.png",
        altText: "Publications",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Mail //
      {
        windowId: "mailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "window",
        windowContent: "Mail",
        windowContentPadding: {
          top: "2px",
          right: "2px",
          bottom: "2px",
          left: "2px",
          mobile: {
            top: "2px", // Mobile specific padding
            right: "2px", // Mobile specific padding
            bottom: "2px", // Mobile specific padding
            left: "2px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "49vw",
        positionY: "12vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "34vh", // Mobile specific position
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

      // Explorer 
      {
        windowId: "explorerWindow",
        windowState: "close",
        displayName: "Explorer",
        windowComponent: "window",
        windowContent: "Explorer",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          mobile: {
            top: "2px", // Mobile specific padding
            right: "2px", // Mobile specific padding
            bottom: "2px", // Mobile specific padding
            left: "2px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "23.6vw",
        positionY: "9.5vh",
        positionXMobile: "2vw", // Mobile specific position
        positionYMobile: "10vh", // Mobile specific position
        iconImage: "resume.png",
        altText: "Explorer",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: true,
      },

      // Notepad
      {
        windowId: "notepadWindow",
        windowState: "close",
        displayName: "Notepad",
        windowComponent: "window",
        windowContent: "notepad",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          mobile: {
            top: "0", // Mobile specific padding
            right: "0", // Mobile specific padding
            bottom: "0", // Mobile specific padding
            left: "0", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "25vw",
        positionY: "5vh",
        positionXMobile: "10vw", // Mobile specific position
        positionYMobile: "10vh", // Mobile specific position
        iconImage: "notepad.png",
        altText: "Notepad",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: true,
      },

      // Individual Projects //
      {
        windowId: "quantiumWindow",
        windowState: "close",
        displayName: "Quantium",
        windowComponent: "window",
        windowContent: "Quantium",
        windowContentPadding: {
          top: null,
          right: "25px",
          bottom: null,
          left: "25px",
          mobile: {
            top: "20px", // Mobile specific padding
            right: "20px", // Mobile specific padding
            bottom: "10px", // Mobile specific padding
            left: "20px", // Mobile specific padding
          },
        },
        position: "absolute",
        positionX: "23.6vw",
        positionY: "9.5vh",
        positionXMobile: "2vw", // Mobile specific position
        positionYMobile: "10vh", // Mobile specific position
        iconImage: "quantium-icon.png",
        altText: "Quantium",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },

    ],
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      state.activeWindow = window;
    },

    pushNewWindow(state, window) {
      state.windows.push(window);
    },

    // Pushes Active Window onto Active Windows Array
    pushActiveWindow(state, window) {
      state.activeWindows.push(window);
    },

    // Removes Active Window from Active Windows Array
    popActiveWindow(state, window) {
      const windowIndex = state.activeWindows.indexOf(window);
      if (windowIndex !== -1) {
        state.activeWindows.splice(windowIndex, 1);
      }
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      const element = document.getElementById(windowID);
      if (element) {
        state.zIndex += 1;
        element.style.zIndex = state.zIndex;
      } else {
        console.error(`Element with ID '${windowID}' not found.`);
      }
    },

    // Set height of max-height of fullscreen window
    setFullscreenWindowHeight(state, height) {
      state.fullscreenWindowHeight = height;
    },

    setFullscreen(state, payload) {
      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();
      window.fullscreen = payload.fullscreen;
    },

    // Window State Mutator
    setWindowState(state, payload) {
      // payload = {'windowState': 'open', 'windowID': 'WindowOne'}

      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();

      var preventAppendingOpenWindow = false;
      if (window.windowState == "open" || window.windowState == "minimize") {
        preventAppendingOpenWindow = true;
      }

      if (payload.windowState == "open") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("zIndexIncrement", payload.windowID);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", payload.windowID);
        }, 0);
        if (preventAppendingOpenWindow == false) {
          setTimeout(() => {
            this.commit("pushActiveWindow", window);
          }, 0);
        }
      } else if (payload.windowState == "close") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("popActiveWindow", window);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", "nil");
        }, 0);
      } else if (payload.windowState == "minimize") {
        window.windowState = payload.windowState;
        this.commit("setActiveWindow", "nil");
      } else {
        console.log("Error: windowState not found or invalid");
      }
    },

    setAllWindowsFullscreen(state, fullscreen) {
      state.windows.forEach(window => {
        window.fullscreen = fullscreen;
      });
    },
  },
  actions: {
    updateMailSent(context, value) {
      context.commit('updateMailSent', value);
    },
    setAllWindowsFullscreen({ commit }, fullscreen) {
      commit('setAllWindowsFullscreen', fullscreen);
    },
  },
  getters: {
    // Active Window Getter
    getActiveWindow: (state) => {
      return state.activeWindow;
    },

    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id);
    },

    getWindowFullscreen: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id).fullscreen;
    },

    getWindows: (state) => {
      return state.windows;
    },

    getActiveWindows(state) {
      return state.activeWindows;
    },

    getFullscreenWindowHeight(state) {
      return state.fullscreenWindowHeight;
    },

    mailContent: (state) => {
      return state.mailContent;
    },

    mailSubject: (state) => {
      return state.mailSubject;
    },

    mailSender: (state) => {
      return state.mailSender;
    },
  },
});
