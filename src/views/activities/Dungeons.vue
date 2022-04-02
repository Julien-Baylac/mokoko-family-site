<template>
  <div class="dungeon" style="width: 100%">
    <div class="dungeon-container" style="margin-bottom: 100px">
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li class="uk-active" @click="changeTier(1)"><a>Tier 1</a></li>
          <li @click="changeTier(2)"><a>Tier 2</a></li>
          <li @click="changeTier(3)"><a> Tier 3</a></li>
        </ul>
      </div>
      <div
        v-for="dungeon in filtredDungeonList"
        v-bind:key="dungeon.id"
        class="dungeon-list"
      >
        <DungeonCard
          :name="dungeon.name"
          :ilvl="dungeon.ilvl"
          :groupSize="dungeon.groupSize"
          :imgUrl="dungeon.imgUrl"
        />
      </div>
      <!-- <hr class="uk-divider-icon" /> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import DungeonCard from "@/components/activities/DungeonCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: {},
  components: {
    DungeonCard,
    Footer,
  },
  data() {
    return {
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
  },
  methods: {
    changeTier(nbTier) {
      this.tier = nbTier;
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
