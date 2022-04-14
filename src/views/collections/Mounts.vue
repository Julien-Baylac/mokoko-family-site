<template>
  <div class="mounts">
    <div class="uk-container">
      <div class="uk-margin-medium-top">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <h3 class="uk-article-title">Les montures</h3>
          <div>
            <p uk-margin>
              <span style="margin-right: 10px"> Mode d'affichage </span>
              <button
                class="uk-button uk-button-default uk-button-small"
                style="margin-right: 7px"
              >
                Liste
              </button>
              <button
                class="uk-button uk-button-default uk-button-small"
                style="margin-right: 7px"
              >
                Galerie
              </button>
              <button
                class="uk-button uk-button-default uk-button-small"
                style="margin-right: 7px"
              >
                Sliders
              </button>
            </p>
          </div>
        </div>
        <div class="uk-margin-medium-top">
          <ul class="uk-flex-center" uk-tab>
            <li><a href="#">Toutes</a></li>
            <li><a href="#">Exploration</a></li>
            <li><a href="#">PvP</a></li>
            <li><a href="#">Drops Twitch</a></li>
            <li><a href="#">Boutique</a></li>
            <li><a href="#">Packs</a></li>
          </ul>
        </div>
        <div style="display: flex; justify-content: space-between">
          <h3 id="table-title" style="margin-bottom: 0">
            Liste des îles ({{ filteredVehicles.length }})
          </h3>
          <div style="display: flex" class="uk-form-small">
            <button
              style="margin-right: 10px"
              class="uk-button uk-button-default uk-button-small"
              :disabled="this.validated === null"
              @click="validate(null)"
            >
              Annuler
            </button>
            <select
              v-model="validated"
              style="padding-right: 30px"
              class="uk-select uk-form-small"
              v-bind:class="{
                'uk-button-secondary': this.validated === false,
              }"
            >
              <option :value="null">Trier les montures obtenues</option>
              <option :value="false">Obtenues</option>
              <option :value="true">Non obtenues</option>
            </select>
          </div>
        </div>
        <div class="uk-inline uk-width-expand uk-margin-top uk-margin-bottom">
          <a class="uk-form-icon" href="#" uk-icon="icon: search"></a>
          <input
            class="uk-input uk-form-small"
            type="text"
            placeholder="Chercher une zone"
            v-model="filter"
          />
        </div>
        <table class="uk-table uk-table-striped" style="margin-bottom: 60px">
          <thead>
            <tr>
              <th>Icone</th>
              <th>Nom</th>
              <th>Obtention</th>
              <th>Dernière date d'obtention</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vehicle in vehicles" v-bind:key="vehicle.id">
              <td style="width: 80px">
                <img
                  :src="
                    require(`@/assets/img/collections/vehicle_${vehicle.id}.webp`)
                  "
                  :style="`background-color: ${vehicle.quality};`"
                  style="border-radius: 5px; margin-left: 20px"
                  width="50"
                  height="50"
                />
              </td>
              <td>{{ vehicle.name }}</td>
              <td>{{ vehicle.obtention }}</td>
              <td>{{ getTime(vehicle.last_obtention_date) }}</td>
              <td>
                <button
                  class="uk-button uk-button-default uk-button-small"
                  style="margin-right: 5px"
                >
                  Infos
                </button>
                <button class="uk-button uk-button-default uk-button-small">
                  Ajouter à ma collection
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer style="margin-top: 60px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import moment from "moment";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      validated: null,
      vehicles: [
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2022, 1, 22],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: null,
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Monture : Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "Pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
      ],
    };
  },
  computed: {
    filteredVehicles() {
      let finalArray = [];
      finalArray = this.vehicles;
      return finalArray;
    },
  },
  methods: {
    getTime(date) {
      if (date !== null) {
        return moment(date).lang("fr").fromNow();
      } else {
        return "Disponible";
      }
    },
    validate(boolean) {
      this.validated = boolean;
    },
  },
};
</script>

<style></style>
