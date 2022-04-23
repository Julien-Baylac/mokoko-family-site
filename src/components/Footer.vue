<template>
  <div
    class="footer"
    v-bind:class="{ 'uk-background-secondary': darkMode }"
    v-bind:style="{ backgroundColor: darkMode ? '#121212' : '#ececec' }"
    style="display: flex; justify-content: center; align-items: center"
  >
    <ul class="uk-navbar-nav" style="margin-right: 40px">
      <!-- socials -->
      <li>
        <a href="https://discord.com/invite/cE9aZh4bPn" target="_blank"
          ><span uk-icon="icon: discord"></span
        ></a>
      </li>
      <li>
        <a href="https://www.twitch.tv/mokokofamily" target="_blank"
          ><span uk-icon="icon: twitch"></span
        ></a>
      </li>
      <li>
        <a href="https://www.instagram.com/mokoko.family" target="_blank"
          ><span uk-icon="icon: instagram"></span
        ></a>
      </li>
      <li>
        <a href="https://twitter.com/MokokoFamily" target="_blank"
          ><span uk-icon="icon: twitter"></span
        ></a>
      </li>
    </ul>
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
