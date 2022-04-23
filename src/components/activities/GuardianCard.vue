<template>
  <div class="uk-section dungeon-card">
    <div class="uk-child-width-1-4" style="display: flex; padding: 10px">
      <div
        style="padding: 10px"
        v-for="guardian in guardians"
        v-bind:key="guardian.id"
      >
        <div
          class="uk-height-small uk-flex uk-flex-center uk-flex-bottom uk-background-cover uk-light"
          :data-src="require(`@/assets/img/guardians/${guardian.imgUrl}.png`)"
          style="border-radius: 8px"
          uk-img
        >
          <button
            class="uk-button uk-button-default uk-button-small"
            style="background-color: rgb(0 0 0 / 60%); margin-bottom: 4px"
          >
            Besoin
          </button>
        </div>
        <div>
          <ul class="uk-list uk-list-collapse uk-list-striped uk-margin-top">
            <li>
              <img
                class="uk-preserve-width uk-border-circle"
                :src="require(`@/assets/img/classes/gunlancer.png`)"
                width="16"
                height="16"
                style="margin-right: 8px; margin-bottom: 4px"
                alt=""
              />NomDuPerso
              <span style="color: grey; font-size: 13px">1340</span>
            </li>
            <li>
              <img
                class="uk-preserve-width uk-border-circle"
                :src="require(`@/assets/img/classes/paladin.png`)"
                width="16"
                height="16"
                style="margin-right: 8px; margin-bottom: 4px"
                alt=""
              />NomDuPerso
              <span style="color: grey; font-size: 13px">1340</span>
            </li>
            <li>
              <img
                class="uk-preserve-width uk-border-circle"
                :src="require(`@/assets/img/classes/bard.png`)"
                width="16"
                height="16"
                style="margin-right: 8px; margin-bottom: 4px"
                alt=""
              />NomDuPerso
              <span style="color: grey; font-size: 13px">1340</span>
            </li>
            <li>
              <img
                class="uk-preserve-width uk-border-circle"
                :src="require(`@/assets/img/classes/striker.png`)"
                width="16"
                height="16"
                style="margin-right: 8px; margin-bottom: 4px"
                alt=""
              />NomDuPerso
              <span style="color: grey; font-size: 13px">1340</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guardians: Array,
  },
  data() {
    return {
      need: [
        {
          id: 1,
          name: "Gustave",
          ilvl: 1278,
          class: "pistolancier",
        },
        {
          id: 2,
          name: "Bob",
          ilvl: 1045,
          class: "pistolancier",
        },
        {
          id: 3,
          name: "John Doe",
          ilvl: 370,
          class: "pistolancier",
        },
      ],
    };
  },
  mounted() {
    console.log(this.guardians);
  },
};
</script>

<style lang="scss" scoped>
.dungeon-card {
  margin-bottom: 30px;
}
</style>
