<template>
  <div
    class="footer"
    v-bind:class="{ 'uk-background-secondary': darkMode }"
    v-bind:style="{ backgroundColor: darkMode ? '#121212' : '#ececec' }"
    style="display: flex; justify-content: center; align-items: center"
  >
    <span>MokokoFamily-Beta@0.0.1 - 2022</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: "1",
    };
  },
  mounted() {
    if (localStorage.getItem("dark-mode")) {
      this.currentTheme = localStorage.getItem("dark-mode");
    } else {
      localStorage.setItem("dark-mode", this.currentTheme);
    }
  },
  computed: {
    darkMode() {
      if (this.currentTheme === "0") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
.footer {
  background-color: gainsboro;
  height: 150px;
}
</style>
