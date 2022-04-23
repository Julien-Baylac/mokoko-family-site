<template>
  <div class="mounts">
    <Header wallpaper="mount_wallpaper" title="Les montures"></Header>
    <div class="uk-container">
      <div class="uk-margin-medium-top">
        <div class="uk-margin-medium-top">
          <ul class="uk-flex-center" uk-tab>
            <li @click="obtentionType = 'all'"><a>Toutes</a></li>
            <li @click="obtentionType = 'exploration'"><a>Exploration</a></li>
            <li @click="obtentionType = 'pvp'"><a>PvP</a></li>
            <li @click="obtentionType = 'twitch'"><a>Drops Twitch</a></li>
            <li @click="obtentionType = 'shop'"><a>Boutique</a></li>
            <li @click="obtentionType = 'pack'"><a>Packs</a></li>
          </ul>
        </div>
        <div style="display: flex; justify-content: space-between">
          <h3 id="table-title" style="margin-bottom: 0">
            Liste des montures ({{ filteredVehicles.length }})
          </h3>
          <div style="display: flex">
            <div style="display: flex" class="uk-form-small">
              <button
                style="margin-right: 10px"
                class="uk-button uk-button-default uk-button-small"
                :disabled="
                  this.availableFilter === null && this.acquiredFilter === null
                "
                @click="resetFilter()"
              >
                Annuler
              </button>
              <select
                v-model="availableFilter"
                style="padding-right: 30px"
                class="uk-select uk-form-small"
              >
                <option :value="null">Trier par disponibilité</option>
                <option :value="false">Disponibles</option>
                <option :value="true">Indisponibles</option>
              </select>
              <select
                v-model="acquiredFilter"
                style="padding-right: 30px; margin-left: 10px"
                class="uk-select uk-form-small"
              >
                <option :value="null">Trier les montures obtenues</option>
                <option :value="false">Obtenues</option>
                <option :value="true">Non obtenues</option>
              </select>
            </div>
          </div>
        </div>
        <div class="uk-inline uk-width-expand uk-margin-top uk-margin-bottom">
          <a class="uk-form-icon" href="#" uk-icon="icon: search"></a>
          <input
            class="uk-input uk-form-small"
            type="text"
            placeholder="Chercher une monture"
            v-model="filter"
          />
        </div>

        <ul
          class="uk-subnav uk-subnav-pill"
          uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
        >
          <li>
            <a class="mount-switcher" @click="vehicleType = 'all'">Toutes</a>
          </li>
          <li>
            <a class="mount-switcher" @click="vehicleType = 'wolf'">Loups</a>
          </li>
          <li>
            <a class="mount-switcher" @click="vehicleType = 'overboard'"
              >Overboards</a
            >
          </li>
          <li>
            <a class="mount-switcher" @click="vehicleType = 'raptor'"
              >Raptors</a
            >
          </li>
          <li>
            <a class="mount-switcher" @click="vehicleType = 'horse'">Chevaux</a>
          </li>
          <li>
            <a class="mount-switcher" @click="vehicleType = 'turtle'"
              >Tortues</a
            >
          </li>
          <li>
            <a class="mount-switcher" @click="vehicleType = 'bug'">Insectes</a>
          </li>
        </ul>

        <table
          v-if="displayType === 'list'"
          class="uk-table uk-table-striped"
          style="margin-bottom: 60px"
        >
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
            <tr v-for="vehicle in filteredVehicles" v-bind:key="vehicle.id">
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
              <td>
                <div style="margin-top: 12px">{{ vehicle.name }}</div>
              </td>
              <td>
                <div style="margin-top: 12px">{{ vehicle.obtention }}</div>
              </td>
              <td>
                <div style="margin-top: 12px">
                  {{ getTime(vehicle.last_obtention_date) }}
                </div>
              </td>
              <td>
                <button
                  class="uk-button uk-button-default uk-button-small"
                  style="margin-right: 5px; margin-top: 10px"
                >
                  Infos
                </button>
                <button
                  class="uk-button uk-button-default uk-button-small"
                  style="margin-top: 10px"
                >
                  Ajouter
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="displayType === 'gallery'">
          <div class="uk-child-width-1-3" uk-grid>
            <mountCard
              v-for="vehicle in filteredVehicles"
              v-bind:key="vehicle.id"
              :name="vehicle.name"
              style="padding: 10px"
            ></mountCard>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 60px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import mountCard from "@/components/collections/mountCard.vue";
import Header from "@/components/collections/header.vue";
import moment from "moment";

export default {
  components: {
    Footer,
    mountCard,
    Header,
  },
  data() {
    return {
      validated: null,
      displayType: "gallery",
      obtentionType: "all",
      vehicleType: "all",
      availableFilter: null,
      acquiredFilter: null,
      vehicles: [
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          type: "overboard",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2022, 1, 22],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          type: "wolf",
          obtention_type: "pvp",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: null,
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          type: "bug",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: false,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: false,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "pack",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "shop",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "shop",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: true,
        },
        {
          name: "Cerbère",
          id: 316,
          quality: "orange",
          obtention_type: "shop",
          obtention: "Dans le pack fondateur de la précommande",
          last_obtention_date: [2007, 0, 29],
          obtained: false,
        },
      ],
    };
  },
  computed: {
    filteredVehicles() {
      let filteredArrayType = [];
      let filteredArrayAvailable = [];

      //obtainable type
      this.vehicles.forEach((element) => {
        if (this.obtentionType === "all") {
          filteredArrayType.push(element);
        } else if (this.obtentionType === element.obtention_type) {
          filteredArrayType.push(element);
        }
      });
      //available
      if (this.acquiredFilter === true) {
        filteredArrayAvailable = filteredArrayType.filter(
          (element) => element.last_obtention_date !== null
        );
      } else if (this.acquiredFilter === false) {
        filteredArrayAvailable = filteredArrayType.filter(
          (element) => element.last_obtention_date === null
        );
      } else {
        filteredArrayAvailable = filteredArrayType;
      }

      //vehicles obtained
      let obtainedFilteredArray = [];
      if (this.availableFilter !== null) {
        obtainedFilteredArray = filteredArrayAvailable.filter(
          (element) => element.obtained !== this.availableFilter
        );
      } else {
        obtainedFilteredArray = filteredArrayAvailable;
      }

      //type vehicles
      let newTypeMountsArray = [];
      if (this.vehicleType !== "all") {
        newTypeMountsArray = obtainedFilteredArray.filter(
          (element) => element.type === this.vehicleType
        );
      } else {
        newTypeMountsArray = obtainedFilteredArray;
      }
      return newTypeMountsArray;
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
    filter() {},
    resetFilter() {
      this.availableFilter = null;
      this.acquiredFilter = null;
    },
  },
};
</script>

<style>
.uk-grid {
  margin-left: 0;
}
.uk-grid-margin {
  margin-top: 0 !important;
}
.mount-switcher {
  text-transform: none !important;
  border-radius: 3px;
}
.uk-card-primary.uk-card-body .uk-subnav-pill > .uk-active > a,
.uk-card-primary
  > :not([class*="uk-card-media"])
  .uk-subnav-pill
  > .uk-active
  > a,
.uk-card-secondary.uk-card-body .uk-subnav-pill > .uk-active > a,
.uk-card-secondary
  > :not([class*="uk-card-media"])
  .uk-subnav-pill
  > .uk-active
  > a,
.uk-light .uk-subnav-pill > .uk-active > a,
.uk-offcanvas-bar .uk-subnav-pill > .uk-active > a,
.uk-overlay-primary .uk-subnav-pill > .uk-active > a,
.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a {
  background-color: #81fe5a;
}
</style>
