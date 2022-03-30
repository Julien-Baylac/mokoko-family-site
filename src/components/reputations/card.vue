<template>
  <!-- card -->
  <div
    class="uk-card uk-card-default uk-card-small"
    style="display: flex; padding: 10px; border-radius: 10px"
    :style="cardRarity"
  >
    <div class="">
      <img :src="require(`@/assets/img/reputations/${imgUrl}.png`)" />
    </div>
    <div style="width: 100%">
      <div class="">
        <h3 class="uk-card-title" style="font-size: 1.2rem; margin-bottom: 5px">
          {{ name }}
        </h3>
        <span>Fierbourg</span><br />
        <span>{{ AffinityMax }} : {{ pts }} pts</span>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          "
        >
          <div class="item-list" style="display: flex">
            <!-- cards -->
            <div
              class="uk-inline"
              style="width: 30px; margin-right: 3px"
              v-for="card in cards"
              v-bind:key="card.name"
            >
              <img
                :src="require(`@/assets/img/reputations/${card.rarity}.png`)"
                style="border-radius: 3px"
              />
              <div
                uk-dropdown="pos: top-left; animation: uk-animation-slide-top-small; duration: 300"
              >
                <span>{{ card.name }}</span>
              </div>
            </div>
            <!-- hearts -->
            <div
              class="uk-inline"
              style="width: 30px; margin-right: 3px"
              v-for="heart in hearts"
              v-bind:key="heart.name"
            >
              <img
                :src="require(`@/assets/img/reputations/coeur-de-geant.png`)"
                style="border-radius: 3px"
              />
              <div
                uk-dropdown="pos: top-left; animation: uk-animation-slide-top-small; duration: 300"
              >
                <span>{{ heart.name }}</span>
              </div>
            </div>
            <!-- stars -->
            <div
              class="uk-inline"
              style="width: 30px; margin-right: 3px"
              v-for="star in stars"
              v-bind:key="star.name"
            >
              <img
                :src="require(`@/assets/img/reputations/etoile.png`)"
                style="border-radius: 3px"
              />
              <div
                uk-dropdown="pos: top-left; animation: uk-animation-slide-top-small; duration: 300"
              >
                <span>{{ star.name }}</span>
              </div>
            </div>
          </div>
          <button
            class="uk-button uk-button-default uk-button-small"
            @click="validateAffinity()"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reputation-card",
  props: {
    imgUrl: null,
    name: String,
    location: String,
    pts: Number,
    AffinityMax: String,
    id: Number,
    cards: Array,
    hearts: Array,
    stars: Array,
    cardColor: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    cardRarity() {
      let maxRarity = null;
      let color = "";
      if (this.cardColor) {
        this.cards.forEach((element) => {
          if (element.rarity === "carte-gris") {
            maxRarity = 1;
          } else if (element.rarity === "carte-commune") {
            maxRarity = 2;
          } else if (element.rarity === "carte-rare") {
            maxRarity = 3;
          } else if (element.rarity === "carte-epique") {
            maxRarity = 4;
          } else if (element.rarity === "carte-legendaire") {
            maxRarity = 5;
          }
        });
        if (maxRarity === 1) {
          color = "grey";
        } else if (maxRarity === 2) {
          color = "green";
        } else if (maxRarity === 3) {
          color = "blue";
        } else if (maxRarity === 4) {
          color = "violet";
        } else if (maxRarity === 5) {
          color = "yellow";
        } else {
          color = null;
        }
      }
      return color ? `border: 1px solid ${color};` : "";
    },
  },
  methods: {
    validateAffinity() {
      return console.log("send affinity " + this.id);
    },
  },
};
</script>

<style></style>
