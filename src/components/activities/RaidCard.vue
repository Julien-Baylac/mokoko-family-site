<template>
  <div class="uk-section dungeon-card">
    <div
      class="uk-background-cover uk-height-large uk-light uk-flex"
      uk-parallax="bgy: -10"
      style="border-radius: 10px; display: block"
      v-bind:style="{
        backgroundImage:
          'url(' + require(`@/assets/img/raids/${imgUrl}.jpeg`) + ')',
      }"
    >
      <div
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 110px;
        "
      >
        <span
          style="
            background-color: rgb(0 0 0 / 60%);
            padding: 10px;
            border-radius: 4px;
            margin-top: 10px;
            margin-left: 10px;
          "
          >{{ groupSize }} Personnes</span
        >
        <span
          style="
            background-color: rgb(0 0 0 / 60%);
            padding: 10px;
            border-radius: 4px;
            margin-top: 10px;
            margin-right: 10px;
          "
          >Niveau d'object : {{ ilvl }}</span
        >
      </div>
      <h3
        class="uk-text-center uk-margin-auto uk-margin-auto-vertical"
        style="
          background-color: rgb(0 0 0 / 60%);
          padding-top: 45px;
          padding-bottom: 45px;
        "
      >
        {{ name }}
      </h3>
      <div style="display: flex; margin-top: 125px">
        <div
          style="display: flex; justify-content: center"
          class="uk-width-1-2"
        >
          <button
            class="uk-button uk-button-default uk-button-small"
            style="background-color: rgb(0 0 0 / 60%); margin-left: 10px"
          >
            Besoin
          </button>
        </div>
        <div
          style="display: flex; justify-content: center"
          class="uk-width-1-2"
        >
          <button
            class="uk-button uk-button-default uk-button-small"
            style="background-color: rgb(0 0 0 / 60%); margin-right: 10px"
          >
            Terminé
          </button>
        </div>
      </div>
    </div>
    <div class="uk-flex" style="margin-top: 30px">
      <div class="uk-width-1-2">
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                margin-right: 20px;
              "
            >
              <h4 class="uk-heading-bullet" style="margin-bottom: 10px">
                <span>Besoin</span>
              </h4>
              <div>
                <span style="font-size: 13px; margin-right: 2px">{{
                  need.length
                }}</span
                ><span uk-icon="users"></span>
              </div>
            </div>

            <div>
              <ul
                class="uk-list uk-list-collapse uk-list-striped uk-margin-top"
              >
                <li>
                  <img
                    class="uk-preserve-width uk-border-circle"
                    :src="require(`@/assets/img/classes/gunlancer.png`)"
                    width="30"
                    height="30"
                    style="margin-right: 15px; margin-bottom: 4px"
                    alt=""
                  />NomDuPerso
                  <span style="color: grey; font-size: 13px; margin-left: 7px"
                    >1340</span
                  >
                </li>
                <li>
                  <img
                    class="uk-preserve-width uk-border-circle"
                    :src="require(`@/assets/img/classes/paladin.png`)"
                    width="30"
                    height="30"
                    style="margin-right: 15px; margin-bottom: 4px"
                    alt=""
                  />NomDuPerso
                  <span style="color: grey; font-size: 13px; margin-left: 7px"
                    >1340</span
                  >
                </li>
                <li>
                  <img
                    class="uk-preserve-width uk-border-circle"
                    :src="require(`@/assets/img/classes/bard.png`)"
                    width="30"
                    height="30"
                    style="margin-right: 15px; margin-bottom: 4px"
                    alt=""
                  />NomDuPerso
                  <span style="color: grey; font-size: 13px; margin-left: 7px"
                    >1340</span
                  >
                </li>
                <li>
                  <img
                    class="uk-preserve-width uk-border-circle"
                    :src="require(`@/assets/img/classes/striker.png`)"
                    width="30"
                    height="30"
                    style="margin-right: 15px; margin-bottom: 4px"
                    alt=""
                  />NomDuPerso
                  <span style="color: grey; font-size: 13px; margin-left: 7px"
                    >1340</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-width-1-2 dungeon-card-right-part">
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                margin-left: 10px;
              "
            >
              <h4 class="uk-heading-bullet" style="margin-bottom: 10px">
                <span>Terminé</span>
              </h4>
              <div>
                <span style="font-size: 13px; margin-right: 2px">{{
                  done.length
                }}</span
                ><span uk-icon="users"></span>
              </div>
            </div>
            <ul
              class="uk-list uk-list-collapse"
              style="margin-left: 10px; margin-top: 0px"
            >
              <div>
                <ul
                  class="uk-list uk-list-collapse uk-list-striped uk-margin-top"
                >
                  <li>
                    <img
                      class="uk-preserve-width uk-border-circle"
                      :src="require(`@/assets/img/classes/gunlancer.png`)"
                      width="30"
                      height="30"
                      style="margin-right: 15px; margin-bottom: 4px"
                      alt=""
                    />NomDuPerso
                    <span style="color: grey; font-size: 13px; margin-left: 7px"
                      >1340</span
                    >
                  </li>
                  <li>
                    <img
                      class="uk-preserve-width uk-border-circle"
                      :src="require(`@/assets/img/classes/paladin.png`)"
                      width="30"
                      height="30"
                      style="margin-right: 15px; margin-bottom: 4px"
                      alt=""
                    />NomDuPerso
                    <span style="color: grey; font-size: 13px; margin-left: 7px"
                      >1340</span
                    >
                  </li>
                  <li>
                    <img
                      class="uk-preserve-width uk-border-circle"
                      :src="require(`@/assets/img/classes/bard.png`)"
                      width="30"
                      height="30"
                      style="margin-right: 15px; margin-bottom: 4px"
                      alt=""
                    />NomDuPerso
                    <span style="color: grey; font-size: 13px; margin-left: 7px"
                      >1340</span
                    >
                  </li>
                  <li>
                    <img
                      class="uk-preserve-width uk-border-circle"
                      :src="require(`@/assets/img/classes/striker.png`)"
                      width="30"
                      height="30"
                      style="margin-right: 15px; margin-bottom: 4px"
                      alt=""
                    />NomDuPerso
                    <span style="color: grey; font-size: 13px; margin-left: 7px"
                      >1340</span
                    >
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    ilvl: Number,
    groupSize: Number,
    imgUrl: String,
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
      done: [
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
};
</script>

<style lang="scss" scoped>
.dungeon-card {
  margin-bottom: 30px;
}
.dungeon-card-right-part {
  margin-left: 50px;
}
</style>
