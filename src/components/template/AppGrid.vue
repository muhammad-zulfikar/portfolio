<template>
  <nav class="grid-container">
    <li v-for="window in windows" :key="window.key">
      <button
        class="icon"
        v-if="window.showInAppGrid != false"
        @dblclick="openWindow(window.windowId)"
      >
        <img
          class="icon-image"
          :src="require('../../assets/icons/win95/' + window.iconImage)"
          :alt="window.altText"
        />
        <div class="border">
          <p class="icon-text">
            {{ window.displayName }}
          </p>
        </div>
      </button>
    </li>
  </nav>
</template>

<style scoped>
button,
img,
p {
  cursor: pointer;
}

.icon-text {
  font-size: 12px;
  font-weight: 300;
}

.icon:hover {
  cursor: pointer;
}
</style>

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
