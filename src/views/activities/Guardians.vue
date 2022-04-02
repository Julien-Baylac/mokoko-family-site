<template>
  <div class="dungeon">
    <div class="dungeon-container" style="margin-bottom: 100px">
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li class="uk-active" @click="changeTier(1)"><a>Tier 1</a></li>
          <li @click="changeTier(2)"><a>Tier 2</a></li>
          <li @click="changeTier(3)"><a> Tier 3</a></li>
        </ul>
      </div>
      <div
        v-for="guardian in filtredGuardianList"
        v-bind:key="guardian.id"
        class="dungeon-list"
      >
        <GuardianCard
          :name="guardian.name"
          :ilvl="guardian.ilvl"
          :groupSize="guardian.groupSize"
          :imgUrl="guardian.imgUrl"
        />
      </div>
      <!-- <hr class="uk-divider-icon" /> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import GuardianCard from "@/components/activities/GuardianCard.vue";

export default {
  props: {},
  components: {
    GuardianCard,
    Footer,
  },
  data() {
    return {
      tier: 1,
      guardiansTiersList: [
        {
          id: 1,
          tier: 1,
          guardians: [
            {
              id: 1,
              part: 1,
              name: "Ur'nil",
              ilvl: 302,
              groupSize: 4,
              imgUrl: "urnil",
            },
            {
              id: 2,
              part: 1,
              name: "Lumerus",
              ilvl: 340,
              groupSize: 4,
              imgUrl: "lumerus",
            },
            {
              id: 3,
              part: 1,
              name: "Legioros Glacies",
              ilvl: 380,
              groupSize: 4,
              imgUrl: "legioros",
            },
            {
              id: 4,
              part: 1,
              name: "Vertus",
              ilvl: 420,
              groupSize: 4,
              imgUrl: "vertus",
            },
            {
              id: 5,
              part: 2,
              name: "Chromanium",
              ilvl: 460,
              groupSize: 4,
              imgUrl: "chromanium",
            },
            {
              id: 6,
              part: 2,
              name: "Nacrasena",
              ilvl: 500,
              groupSize: 4,
              imgUrl: "nacrasena",
            },
            {
              id: 7,
              part: 2,
              name: "Yoho, le renard de feu",
              ilvl: 540,
              groupSize: 4,
              imgUrl: "yoho",
            },
            {
              id: 8,
              part: 2,
              name: "Tytalos",
              ilvl: 580,
              groupSize: 4,
              imgUrl: "tytalos",
            },
          ],
        },
      ],
    };
  },
  computed: {
    filtredGuardianList() {
      let newArray = [];
      this.guardiansTiersList.forEach((element) => {
        if (element.tier === this.tier) {
          newArray.push(...element.guardians);
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
