<template>
  <div class="email-form">
    <div class="menu-bar__container">
      <div class="menu-bar__menu">
        <div class="menu-bar__handle"></div>
        <span class="menu-bar__label"> To: </span>
        <input
          class="menu-bar__input"
          type="text"
          value="zulfikawr@gmail.com"
          disabled
          style="cursor: url('@/assets/cursor/cursor.cur'), auto !important"
        />
      </div>
      <div class="menu-bar__hr"></div>
      <div class="menu-bar__menu">
        <div class="menu-bar__handle"></div>
        <span class="menu-bar__label"> CC: </span>
        <input
          class="menu-bar__input"
          type="email"
          v-model="cc"
          @input="generateMailto"
        />
      </div>
      <div class="menu-bar__hr"></div>
      <div class="menu-bar__menu">
        <div class="menu-bar__handle"></div>
        <span class="menu-bar__label"> Subject: </span>
        <input
          class="menu-bar__input"
          type="text"
          name="subject"
          autocomplete="off"
          v-model="subject"
          @input="generateMailto"
        />
      </div>
    </div>
    <textarea
      class="email__body"
      v-model="body"
      @input="generateMailto"
    ></textarea>
    <div class="menu-bar__menu">
      <div class="menu-bar__spacer"></div>
      <a :href="mailtoLink" target="_blank" class="button">
        <button type="button">
          <img src="@/assets/icons/win95/send.png" />
          <label>Send</label>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: "",
      cc: "",
      body: "",
    };
  },
  computed: {
    mailtoLink() {
      const encodedSubject = encodeURIComponent(this.subject);
      const encodedCC = encodeURIComponent(this.cc);
      const encodedBody = encodeURIComponent(this.body.replace(/\n/g, "\r\n"));
      return `mailto:muhammadzulfikar@duck.com?subject=${encodedSubject}&cc=${encodedCC}&body=${encodedBody}`;
    },
  },
  methods: {
    generateMailto() {
      // No need to manually update href, Vue will handle it with the computed property
    },
  },
  mounted() {
    // Initial generation of mailto link
    this.generateMailto();

    // Attach input event listeners
    const inputs = this.$el.querySelectorAll("textarea, input");
    inputs.forEach((input) => {
      input.addEventListener("input", this.generateMailto);
    });
  },
  beforeDestroy() {
    // Remove event listeners to prevent memory leaks
    const inputs = this.$el.querySelectorAll("textarea, input");
    inputs.forEach((input) => {
      input.removeEventListener("input", this.generateMailto);
    });
  },
};
</script>

<style scoped>
/* --- FILE MENU BARS --- */
.menu-bar__container {
  box-shadow: var(--control-shadow);
  margin: 5px 0 10px 0;
}

.menu-bar__menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  -webkit-user-select: none;
  user-select: none;
}

.menu-bar__item {
  margin: 5px 2px 0 2px;
  padding: 0 2px;
  cursor: pointer;
  position: relative;
}

.menu-bar__item:hover {
  box-shadow: var(--icon-shadow);
}

.menu-bar__item:active,
.menu-bar__item--active {
  box-shadow: var(--icon-shadow__active);
}

.menu-bar__hr {
  border-top: 1px solid gray;
  border-bottom: 1px solid white;
}

.menu-bar__divider {
  border-left: 1px solid gray;
  border-right: 1px solid white;
  align-self: stretch;
  margin: 0px 1px;
}

.menu-bar__handle {
  align-self: stretch;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
  width: 2px;
  min-height: 22px;
  margin: 2px;
}

.menu-bar__spacer {
  flex-grow: 1;
}

.menu-bar__label {
  margin: 2px 4px;
  font-size: 14px;
}

.menu-bar__input {
  flex-grow: 1;
  font-size: 14px;
}

/* --- EMAIL --- */

.window[data-name="Email"] .email__body {
  flex-grow: 1;
  padding: 8px;
  resize: none;
  min-height: 200px;
  min-width: 300px;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

input[type="email"],
input[type="password"],
input[type="text"],
select {
  padding: 3px 4px;
  box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf,
    inset 2px 2px #0a0a0a;
  background-color: #fff;
  box-sizing: border-box;
  cursor: text !important;
}

textarea {
  padding: 3px 4px;
  box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf,
    inset 2px 2px #0a0a0a;
  background-color: #fff;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  border: none;
  cursor: text !important;
  width: 100%;
  height: 315px;
}

.button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.button button {
  display: flex;
  align-items: center;
  margin: 5px 5px;
  padding: 5px;
  border: 2px solid white;
  background: rgb(189, 190, 189);
  box-shadow: 1.5px 1.5px black;
  border-top: solid rgb(250, 250, 250) 1.5px;
  border-left: solid rgb(250, 250, 250) 1.5px;
  border-bottom: solid rgb(90, 90, 90) 1.5px;
  border-right: solid rgb(90, 90, 90) 1.5px;
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.button button img {
  height: 22px;
  padding-bottom: 2px;
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.button label {
  padding-top: 2px;
  padding-left: 5px;
  font-size: 13px;
  cursor: url("@/assets/cursor/pointer.cur"), auto !important;
}

.button button:hover {
  background-color: darkgray;
}

/* Media Query */
@media (max-width: 600px) {
  .fullscreen textarea {
    height: 500px;
  }
}
</style>
