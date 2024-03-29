<template>
  <div class="popup" :class="{ 'show': visible }" @transitionend="destroyPopup">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    timeout: Number
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 4000);
    }, 1000);
  },
  methods: {
    destroyPopup() {
      if (!this.visible) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  display: block;
  padding: 4px;
  border: 2px solid rgb(10, 10, 10);
  background: rgb(254, 251, 204);
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px;
  text-align: center;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.popup.show {
  opacity: 1;
}
</style>