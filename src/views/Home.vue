<template>
  <div class="home">
    <Header></Header>
    <div>MokokoFamily-Beta@0.0.1</div>
    <i class="fa-brands fa-twitch"></i>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
