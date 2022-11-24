<template>
  <div class="dungeons" style="width: 100%">
    <Header
      wallpaper="dungeon_wallpaper"
      title="Argos"
      subtitle="Raid abyssal"
      description="T1"
    ></Header>
    <div class="dungeon-container" style="margin-bottom: 100px">
      <span style="margin-left: 40px">Liste des groupes</span>
      <div class="group-list" style="margin-top: 15px">
        <div
          v-for="k in 3"
          :key="k"
          class="group"
          style="display: flex; min-height: 100px; margin-top: 20px"
        >
          <div
            class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
            :data-src="require(`@/assets/img/profile/profil-selfi.png`)"
            style="width: 60px; height: 60px; border-radius: 60px"
            uk-img
          ></div>
          <div class="in-group" style="margin-left: 20px; width: 100%">
            <div
              style="margin-left: 20px; margin-right: 20px; margin-top: 10px"
            >
              <div style="display: flex; justify-content: space-between">
                <span>OowTheory</span>
                <span>Groupe 1/8</span>
              </div>
              <div style="margin-top: 20px; margin-bottom: 20px; display: flex">
                <div
                  v-for="i in 8"
                  :key="i"
                  style="
                    background-color: grey;
                    height: 150px;
                    width: 100px;
                    margin: 5px;
                    border-radius: 7px;
                  "
                >
                  <span
                    uk-icon="plus"
                    style="
                      padding: 10px;
                      background-color: #121212;
                      border-radius: 30px;
                    "
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/activities/header.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: {},
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      currentPart: 1,
      tier: 1,
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
  widows: 800px;
  margin-top: 30px;
}
.dungeon-list {
  padding-left: 5%;
  padding-right: 5%;
}
.group-list {
  background-color: #121212;
  border-radius: 8px;
  margin-left: 40px;
  padding: 20px;
  width: 90%;
}
.group {
  margin-bottom: 20px;
}
.in-group {
  background-color: #202020;
  border-radius: 5px;
}
</style>
<style lang="scss">
.uk-grid > * {
  padding-left: 0;
}
</style>
