<template>
  <div class="profile">
    <div class="uk-container">
      <div
        class="uk-margin-medium-top"
        style="display: flex; justify-content: space-between"
      >
        <div style="display: flex">
          <div
            class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
            :data-src="require(`@/assets/img/profile/profil-selfi.png`)"
            style="
              width: 115px;
              height: 115px;
              border-radius: 7px;
              margin-right: 20px;
              margin-top: 10px;
            "
            uk-img
          ></div>
          <div>
            <h3 class="uk-article-title" style="margin-bottom: 0px">
              <span style="margin-right: 20px">Oow</span
              ><span style="font-size: 20px">Niv. 54</span>
            </h3>
            <div style="display: flex; align-items: center">
              <img
                :src="require(`@/assets/img/classes/pistolancier.png`)"
                style="
                  width: 70px;
                  height: 70px;
                  margin-right: 10px;
                  margin-bottom: 14px;
                "
              />
              <dl class="uk-description-list" style="margin-top: 7px">
                <dt>
                  <span style="">Pistolancier</span> -
                  <span style="font-size: 10px">Chevalier solitaire</span>
                </dt>
                <dd>
                  <span>Niv. Expédition 90</span>
                </dd>
                <dd>
                  <span>Niveau d'objet 1370</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div class="right-part" style="display: flex">
          <div>
            <span>Mokoko Family</span><br />
            <span>Zinnervale</span>
          </div>
        </div>
      </div>
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li class="uk-active" @click="changeSection('character')">
            <a>Personnage</a>
          </li>
          <!-- <li @click="changeSection('build')"><a>Builds</a></li> -->
          <li @click="changeSection('exploration')"><a>Activités</a></li>
          <li @click="changeSection('exploration')"><a>Exploration</a></li>
          <li @click="changeSection('collection')"><a>Collection</a></li>
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
