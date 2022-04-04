<template>
  <div class="uk-section dungeon-card">
    <div class="uk-flex">
      <div class="uk-width-1-5">
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

            <ul class="uk-list uk-list-collapse" style="margin-top: 0px">
              <li v-for="char in need" v-bind:key="char.id">
                <img
                  class="uk-preserve-width uk-border-circle"
                  :src="require(`@/assets/img/classes/${char.class}.png`)"
                  width="20"
                  height="20"
                  style="background-color: black; margin-right: 5px"
                  alt=""
                />
                {{ char.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="uk-background-cover uk-height-medium uk-light uk-flex uk-width-3-5"
        uk-parallax="bgy: -100"
        style="border-radius: 10px; display: block; padding: 30px"
        v-bind:style="{
          backgroundImage:
            'url(' + require(`@/assets/img/dungeons/${imgUrl}.png`) + ')',
        }"
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-bottom: 80px;
          "
        >
          <span>{{ groupSize }} Personnes</span>
          <span>Niveau d'object : {{ ilvl }}</span>
        </div>
        <h3 class="uk-text-center uk-margin-auto uk-margin-auto-vertical">
          {{ name }}
        </h3>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 80px;
          "
        >
          <button class="uk-button uk-button-default uk-button-small">
            Besoin
          </button>
          <button class="uk-button uk-button-default uk-button-small">
            Terminé
          </button>
        </div>
      </div>
      <div class="uk-width-1-5 dungeon-card-right-part">
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
              <li v-for="char in done" v-bind:key="char.id">
                <img
                  class="uk-preserve-width uk-border-circle"
                  :src="require(`@/assets/img/classes/${char.class}.png`)"
                  width="20"
                  height="20"
                  style="background-color: black; margin-right: 5px"
                  alt=""
                />
                {{ char.name }}
              </li>
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
