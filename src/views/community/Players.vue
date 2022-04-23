<template>
  <div class="players">
    <Header
      wallpaper="players_wallpaper"
      title="Les joueurs"
      subtitle="Les joueurs de la communauté"
      :description="`Faites une recherche en cliquant sur l'image ou recherchez directement via le filtre au dessus du tableau`"
    ></Header>
    <div class="uk-container">
      <div class="uk-margin-medium-top" style="margin-bottom: 0px">
        <ul class="uk-flex-center" uk-tab>
          <li><a @click="changeSection('eu-central')">Europe centrale</a></li>
          <li><a @click="changeSection('eu-west')">Europe occidentale</a></li>
          <li><a @click="changeSection('usa-south')">Amérique du Sud</a></li>
          <li><a @click="changeSection('usa-est')">Est des Etats-unis</a></li>
          <li>
            <a @click="changeSection('usa-west')">Ouest des Etats-unis</a>
          </li>
        </ul>
      </div>

      <ul
        class="uk-subnav uk-subnav-pill"
        style="margin-bottom: 50px"
        uk-switcher
      >
        <li v-for="server in filteredServers" v-bind:key="server.name">
          <a class="serveur-switcher">{{ server }}</a>
        </li>
      </ul>
      <div>
        <div class="uk-child-width-expand@s" uk-grid>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/sorceress.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Sorcière
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/berserker.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Berserker
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/paladin.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Paladin
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/deathblade.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Sanguelame
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/gunslinger.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Fusilière
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/bard.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Barde
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
        <!-- second line -->
        <div class="uk-child-width-expand@s" uk-grid>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/gunlancer.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Pistolancier
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/soulfist.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Spirite
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/wardancer.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Essentialiste
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/artillerist.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Artilleur
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/scrapper.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Élémentiste
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/deadeye.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Franc-tireur
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
        <!-- 3th line -->
        <div class="uk-child-width-expand@s" uk-grid>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/striker.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Pugiliste
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/shadowhunter.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Démoniste
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                :src="require(`@/assets/img/classes/sharpshooter.png`)"
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Sagitaire
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div class="uk-width-1-6">
            <h4 style="display: flex">
              <img
                style="
                  border-radius: 30px;
                  width: 30px;
                  height: 30px;
                  margin-right: 7px;
                  border: 1px grey solid;
                "
              />Lancière
            </h4>
            <ul class="uk-list uk-list-collapse uk-list-striped">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/community/header.vue";

export default {
  name: "players",
  components: { Footer, Header },
  data() {
    return {
      currentZone: "eu-central",
      zones: [
        {
          id: 1,
          name: "eu-central",
          serveurs: [
            "Neria",
            "Kadan",
            "Trixion",
            "Calvasus",
            "Thirain",
            "Zinnervale",
            "Asta",
            "Wei",
            "Slen",
            "Slen",
            "Procyon",
            "Beatrice",
            "Inanna",
            "Thaemine",
            "Sirius",
            "Antares",
            "Brelshaza",
            "Nineveh",
            "Mokoko",
          ],
        },
        {
          id: 2,
          name: "eu-west",
          serveurs: [
            "Rethramis",
            "Tortoyk",
            "Moonkeep",
            "Stonehearth",
            "Shadespire",
            "Tragon",
            "Petrania",
            "Punika",
          ],
        },
        {
          id: 3,
          name: "usa-south",
          serveurs: [
            "Kazeros",
            "Agaton",
            "Gienah",
            "Arcturus",
            "Yorn",
            "Feiton",
            "Vern",
            "Kurzan",
            "Prideholme",
          ],
        },
        {
          id: 4,
          name: "usa-west",
          serveurs: [
            "Mari",
            "Valtan",
            "Enviska",
            "Akkan",
            "Bergstrom",
            "Shandi",
            "Rohendel",
          ],
        },
        {
          id: 5,
          name: "usa-est",
          serveurs: [
            "Azena",
            "Una",
            "Regulus",
            "Avesta",
            "Galatur",
            "Karta",
            "Ladon",
            "Kharmine",
            "Elzowin",
            "Sasha",
            "Adrinne",
            "Aldebaran",
            "Zosma",
            "Vykas",
            "Danube",
          ],
        },
      ],
    };
  },
  computed: {
    filteredServers() {
      let zone = this.zones.find(
        (element) => element.name === this.currentZone
      );
      return zone.serveurs;
    },
  },
  methods: {
    changeSection(String) {
      this.currentZone = String;
    },
  },
};
</script>

<style>
.serveur-switcher {
  text-transform: none !important;
  border-radius: 3px;
}
.uk-card-primary.uk-card-body .uk-subnav-pill > .uk-active > a,
.uk-card-primary
  > :not([class*="uk-card-media"])
  .uk-subnav-pill
  > .uk-active
  > a,
.uk-card-secondary.uk-card-body .uk-subnav-pill > .uk-active > a,
.uk-card-secondary
  > :not([class*="uk-card-media"])
  .uk-subnav-pill
  > .uk-active
  > a,
.uk-light .uk-subnav-pill > .uk-active > a,
.uk-offcanvas-bar .uk-subnav-pill > .uk-active > a,
.uk-overlay-primary .uk-subnav-pill > .uk-active > a,
.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a {
  background-color: #81fe5a;
}
</style>
