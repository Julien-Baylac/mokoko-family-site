<template>
  <div class="home">
    <activitiesPresentation></activitiesPresentation>
    <explorationsPresentation class="uk-container"></explorationsPresentation>
    <collectionPresentation></collectionPresentation>
    <twitchPresentation></twitchPresentation>
    <Footer style="margin-top: 30px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import activitiesPresentation from "@/views/home/activitiesPresentation.vue";
import explorationsPresentation from "@/views/home/explorationsPresentation.vue";
import collectionPresentation from "@/views/home/collectionPresentation.vue";
import twitchPresentation from "@/views/home/twitchPresentation.vue";

export default {
  name: "Home",
  components: {
    Footer,
    activitiesPresentation,
    explorationsPresentation,
    collectionPresentation,
    twitchPresentation,
  },
};
</script>
