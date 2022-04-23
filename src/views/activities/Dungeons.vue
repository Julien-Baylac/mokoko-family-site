<template>
  <div class="dungeons" style="width: 100%">
    <Header
      wallpaper="dungeon_wallpaper"
      title="Donjons abyssaux"
      subtitle="Inscriptions aux donjons abyssaux"
      :description="`Faites une recherche en cliquant sur l'image ou recherchez directement via le filtre au dessus du tableau`"
    ></Header>
    <div class="dungeon-container" style="margin-bottom: 100px">
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li class="uk-active" @click="changeTier(1)"><a>Tier 1</a></li>
          <li @click="changeTier(2)"><a>Tier 2</a></li>
          <li @click="changeTier(3)"><a> Tier 3</a></li>
        </ul>
      </div>
      <ul
        class="uk-subnav uk-subnav-pill"
        style="margin-left: 50px; margin-bottom: 20px"
        uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
      >
        <li
          v-for="part in partList"
          v-bind:key="part"
          @click="changePart(part)"
        >
          <a class="collect-switcher">Partie {{ part }}</a>
        </li>
      </ul>
      <div
        class="dungeon-list"
        style="display: flex; justify-content: space-between"
        :class="'uk-child-width-1-' + cardDungeonList.length"
      >
        <div v-for="dungeon in cardDungeonList" v-bind:key="dungeon.id">
          <DungeonCard
            :imgUrl="dungeon.imgUrl"
            :name="dungeon.name"
            :ilvl="dungeon.ilvl"
            :groupSize="dungeon.groupSize"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import DungeonCard from "@/components/activities/DungeonCard.vue";
import Header from "@/components/activities/header.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: {},
  components: {
    DungeonCard,
    Footer,
    Header,
  },
  data() {
    return {
      currentPart: 1,
      tier: 1,
      dungeonsTiersList: [
        {
          id: 1,
          tier: 1,
          dungeons: [
            {
              id: 1,
              part: 1,
              name: "Canyon de la bete démon",
              ilvl: 340,
              groupSize: 4,
              imgUrl: "0",
            },
            {
              id: 2,
              part: 1,
              name: "Les origines du nécromancien",
              ilvl: 340,
              groupSize: 4,
              imgUrl: "1",
            },
            {
              id: 3,
              part: 2,
              name: "Hall du seigneur de g.perverti",
              ilvl: 460,
              groupSize: 4,
              imgUrl: "2",
            },
            {
              id: 4,
              part: 2,
              name: "Palais d'Hildebrandt",
              ilvl: 460,
              groupSize: 4,
              imgUrl: "3",
            },
          ],
        },
        {
          id: 2,
          tier: 2,
          dungeons: [
            {
              id: 5,
              part: 1,
              name: "Route des lamentations",
              ilvl: 840,
              groupSize: 4,
              imgUrl: "4",
            },
            {
              id: 6,
              part: 1,
              name: "Forge de l'orgueil déchu",
              ilvl: 840,
              groupSize: 4,
              imgUrl: "5",
            },
            {
              id: 7,
              part: 2,
              name: "Mer indolente",
              ilvl: 960,
              groupSize: 8,
              imgUrl: "6",
            },
            {
              id: 8,
              part: 2,
              name: "Karkosa silencieux",
              ilvl: 960,
              groupSize: 8,
              imgUrl: "7",
            },
            {
              id: 9,
              part: 2,
              name: "Sanctuaire d'Alaric",
              ilvl: 960,
              groupSize: 8,
              imgUrl: "8",
            },
          ],
        },
        {
          id: 3,
          tier: 3,
          dungeons: [
            {
              id: 10,
              part: 1,
              name: "Oeil d'Aira",
              ilvl: 1325,
              groupSize: 4,
              imgUrl: "9",
            },
            {
              id: 11,
              part: 1,
              name: "Preveza d'Oreha",
              ilvl: 1340,
              groupSize: 4,
              imgUrl: "10",
            },
          ],
        },
      ],
    };
  },
  computed: {
    filtredDungeonList() {
      let newArray = [];
      this.dungeonsTiersList.forEach((element) => {
        if (element.tier === this.tier) {
          newArray.push(...element.dungeons);
        }
      });
      return newArray;
    },
    partList() {
      let newArray = [];
      for (const i in this.filtredDungeonList) {
        if (!newArray.includes(this.filtredDungeonList[i].part)) {
          newArray.push(this.filtredDungeonList[i].part);
        }
      }
      return newArray;
    },
    cardDungeonList() {
      let newArray = [];
      console.log(this.filtredDungeonList);
      console.log(this.partList);
      this.filtredDungeonList.forEach((element) => {
        if (element.part === this.currentPart) {
          newArray.push(element);
        }
      });
      console.log(newArray);
      return newArray;
    },
  },
  methods: {
    changeTier(nbTier) {
      this.tier = nbTier;
      this.currentPart = 1;
    },
    changePart(Number) {
      this.currentPart = Number;
    },
  },
};
</script>

<style lang="scss" scoped>
.uk-section {
  padding: 0;
}
.dungeon-container {
  margin-top: 30px;
}
.dungeon-list {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
<style lang="scss">
.uk-grid > * {
  padding-left: 0;
}
</style>
