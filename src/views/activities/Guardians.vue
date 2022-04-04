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
      <ul
        class="uk-subnav uk-subnav-pill uk-margin-left"
        uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
      >
        <li
          v-for="guardianList in filtredGuardianList"
          v-bind:key="guardianList.part"
        >
          <a>Partie {{ guardianList.part }}</a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li
          v-for="guardianList in filtredGuardianList"
          v-bind:key="guardianList.part"
        >
          <div>
            <GuardianCard
              class="guardian-list"
              :guardians="guardianList.guardians"
            />
          </div>
        </li>
      </ul>
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
          guardiansParts: [
            {
              part: 1,
              guardians: [
                {
                  id: 1,
                  name: "Ur'nil",
                  ilvl: 302,
                  groupSize: 4,
                  imgUrl: "urnil",
                },
                {
                  id: 2,
                  name: "Lumerus",
                  ilvl: 340,
                  groupSize: 4,
                  imgUrl: "lumerus",
                },
                {
                  id: 3,
                  name: "Legioros Glacies",
                  ilvl: 380,
                  groupSize: 4,
                  imgUrl: "legioros",
                },
                {
                  id: 4,
                  name: "Vertus",
                  ilvl: 420,
                  groupSize: 4,
                  imgUrl: "vertus",
                },
              ],
            },
            {
              part: 2,
              guardians: [
                {
                  id: 5,
                  name: "Ur'nilzzzz",
                  ilvl: 302,
                  groupSize: 4,
                  imgUrl: "urnil",
                },
                {
                  id: 6,
                  name: "Lumeruzzzzs",
                  ilvl: 340,
                  groupSize: 4,
                  imgUrl: "lumerus",
                },
                {
                  id: 7,
                  name: "Legioros Glazzzzcies",
                  ilvl: 380,
                  groupSize: 4,
                  imgUrl: "legioros",
                },
                {
                  id: 8,
                  name: "Vertuzzzs",
                  ilvl: 420,
                  groupSize: 4,
                  imgUrl: "vertus",
                },
              ],
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
          newArray = element.guardiansParts;
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
