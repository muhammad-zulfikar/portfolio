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
      }, 1000);
      if (!this.mailSent) {
        setTimeout(() => {
          this.visible = false;
        }, 5000);
      }
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
    opacity: 0; /* Start with 0 opacity */
    transition: opacity 1s ease-in-out; /* Apply transition on opacity */
  }
  .popup.show {
    opacity: 1; /* When the 'show' class is added, transition to opacity 1 */
  }
  </style>
  