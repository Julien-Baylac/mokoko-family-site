<template>
  <div class="players">
    <div class="uk-container">
      <h3 class="uk-article-title uk-margin-medium-top">Statistiques</h3>
      <div class="uk-flex uk-flex-between">
        <div style="margin-top: 20px">
          <dl class="uk-description-list">
            <dt>Barème du Top puissance</dt>
            <dd>Niveau x10 | Expé niveau x15 | Point x3 | Ilvl x2</dd>
          </dl>
        </div>
      </div>
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
import classBars from "@/components/statistics/classBars.vue";
import ilvl from "@/components/statistics/ilvl.vue";
import comparator from "../../components/statistics/comparator.vue";

export default {
  components: { Footer, classBars, ilvl, comparator },
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
