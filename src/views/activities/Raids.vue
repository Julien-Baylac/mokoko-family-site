<template>
  <div class="raids" style="width: 100%">
    <Header
      wallpaper="raid_wallpaper"
      title="Raids abyssaux"
      subtitle="Inscriptions aux raids abyssaux"
      :description="`Faites une recherche en cliquant sur l'image ou recherchez directement via le filtre au dessus du tableau`"
    ></Header>
    <div class="dungeon-container" style="margin-bottom: 100px">
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li @click="changeTier(3)"><a> Tier 3</a></li>
        </ul>
      </div>

      <div class="dungeon-list">
        <RaidCard
          :name="filtredDungeonList[currentDungeon].name"
          :ilvl="filtredDungeonList[currentDungeon].ilvl"
          :groupSize="filtredDungeonList[currentDungeon].groupSize"
          :imgUrl="filtredDungeonList[currentDungeon].imgUrl"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import RaidCard from "@/components/activities/RaidCard.vue";
import Header from "@/components/activities/header.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: {},
  components: {
    RaidCard,
    Footer,
    Header,
  },
  data() {
    return {
      currentDungeon: 0,
      tier: 3,
      dungeonsTiersList: [
        {
          id: 3,
          tier: 3,
          dungeons: [
            {
              id: 10,
              part: 1,
              name: "Argos",
              ilvl: 1370,
              groupSize: 8,
              imgUrl: "argos",
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
  },
  methods: {
    changeTier(nbTier) {
      this.tier = nbTier;
      this.currentDungeon = 0;
    },
    changeDungeon(Number) {
      this.currentDungeon = Number;
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
