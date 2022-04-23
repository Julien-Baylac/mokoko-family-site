<template>
  <div class="players">
    <Header
      wallpaper="stats_wallpaper"
      title="Statistiques"
      subtitle="Les joueurs de la communauté"
      :description="`Faites une recherche en cliquant sur l'image ou recherchez directement via le filtre au dessus du tableau`"
    ></Header>
    <div class="uk-container">
      <div class="uk-margin-medium-top">
        <ul class="uk-flex-center" uk-tab>
          <li><a @click="changeSection('ilvl')">Ilvl</a></li>
          <li><a @click="changeSection('classes')">Classes</a></li>
          <li><a @click="changeSection('comparator')">Comparateur</a></li>
        </ul>
      </div>
      <div style="margin-top: 50px">
        <ilvl v-if="section === 'ilvl'"></ilvl>
        <classBars v-if="section === 'classes'"></classBars>
        <comparator v-if="section === 'comparator'"></comparator>
      </div>
    </div>
    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import classBars from "@/components/community/statistics/classBars.vue";
import ilvl from "@/components/community/statistics/ilvl.vue";
import comparator from "../../components/community/statistics/comparator.vue";
import Header from "@/components/community/header.vue";

export default {
  components: { Footer, classBars, ilvl, comparator, Header },
  data() {
    return {
      section: "ilvl",
    };
  },
  methods: {
    changeSection(section) {
      this.section = section;
    },
  },
};
</script>

<style></style>
