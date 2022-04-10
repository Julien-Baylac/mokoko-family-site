<template>
  <div class="profile">
    <div class="uk-container">
      <div style="display: flex; justify-content: space-between">
        <div>
          <div>
            <h3 class="uk-article-title uk-margin-medium-top">
              <span style="margin-right: 20px">Oow</span
              ><span style="font-size: 20px">Niv. 54</span>
            </h3>
            <dl class="uk-description-list">
              <dt>
                <span style="">Pistolancier</span> -
                <span style="font-size: 10px">Chevalier solitaire</span>
              </dt>
              <dd>
                <span>Niv. Expédition</span>
              </dd>
            </dl>
          </div>
        </div>

        <div class="uk-margin-medium-top">
          <span>Guilde : Mokoko Family</span><br />
          <span>Serveur : Zinnervale</span>
        </div>

        <div class="right-part uk-margin-medium-top" style="display: flex">
          <div style="width: 70px; margin-right: 50px">
            <img
              :src="require(`@/assets/img/exploration/ilvl.webp`)"
              style="width: 100%"
            />
            <div
              style="display: flex; justify-content: center; margin-top: 10px"
            >
              <span>90</span>
            </div>
          </div>
          <div style="width: 70px">
            <img
              :src="require(`@/assets/img/exploration/ilvl.webp`)"
              style="width: 100%"
            />
            <div
              style="display: flex; justify-content: center; margin-top: 10px"
            >
              <span>1358.33</span>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li class="uk-active" @click="changeSection('character')">
            <a>Personnage</a>
          </li>
          <li @click="changeSection('exploration')"><a>Exploration</a></li>
          <li @click="changeSection('collection')"><a>Collection</a></li>
          <li @click="changeSection('build')"><a>Builds</a></li>
        </ul>
      </div>
      <Character v-if="section === 'character'" />
      <Exploration v-if="section === 'exploration'" />
      <Collection v-if="section === 'collection'" />
      <Build v-if="section === 'build'" />
    </div>
    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Character from "@/views/profile/Character.vue";
import Exploration from "@/views/profile/Exploration.vue";
import Collection from "@/views/profile/Collection.vue";
import Build from "@/views/profile/Build.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Character, Footer, Exploration, Collection, Build },
  name: "ranking",
  data() {
    return {
      section: "character",
    };
  },
  methods: {
    changeSection(section) {
      this.section = section;
      if (section === "ilvl") {
        this.current_thead = this.thead_ilvl;
      } else if (section === "exploration") {
        this.current_thead = this.thead_exploration;
      } else if (section === "collection") {
        this.current_thead = this.thead_collection;
      } else if (section === "steam") {
        this.current_thead = this.thead_steam;
      }
    },
  },
};
</script>

<style></style>
