<template>
  <div class="home">
    <Header></Header>
    <activitiesPresentation class="uk-container"></activitiesPresentation>
    <explorationsPresentation class="uk-container"></explorationsPresentation>
    <collectionPresentation></collectionPresentation>
    <twitchPresentation></twitchPresentation>
    <Footer style="margin-top: 30px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/header.vue";
import activitiesPresentation from "@/views/home/activitiesPresentation.vue";
import explorationsPresentation from "@/views/home/explorationsPresentation.vue";
import collectionPresentation from "@/views/home/collectionPresentation.vue";
import twitchPresentation from "@/views/home/twitchPresentation.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    activitiesPresentation,
    explorationsPresentation,
    collectionPresentation,
    twitchPresentation,
  },
};
</script>
