<template>
  <div class="islands">
    <Header
      wallpaper="islands_wallpaper"
      title="Symboles insulaires"
      subtitle="RECHERCHE DES ÂMES INSULAIRES"
      :description="`Faites une recherche par zone en cliquant sur la carte ou recherchez directement une île parmis les ${islands.length} référencées`"
    ></Header>
    <div class="uk-container" style="margin-top: 70px">
      <div class="uk-child-width-1" uk-grid>
        <div>
          <div class="uk-inline uk-dark">
            <img
              :src="require(`@/assets/img/exploration/islands_map.png`)"
              width="1800"
              height="1200"
              style="border-radius: 10px"
            />
            <a
              v-for="marker in markers"
              v-bind:key="`${marker.zone}-${marker.sector}`"
              class="uk-position-absolute uk-transform-center"
              :style="`left: ${marker.left}%; top: ${marker.top}%`"
              :uk-tooltip="`${capitalize(marker.zone)} ${marker.sector}`"
              @click="targetZone(marker.zone, marker.sector)"
              uk-marker
            ></a>
          </div>
        </div>
      </div>
      <div class="uk-margin-medium-top">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="{ 'uk-active': isActive('all') }"
            @click="changeSection('all')"
          >
            <a>Toutes</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActive('procyon') }"
            @click="changeSection('procyon')"
          >
            <a>Procyon</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActive('gienah') }"
            @click="changeSection('gienah')"
          >
            <a>Gienah</a>
          </li>
        </ul>
      </div>
      <!-- sector -->
      <div v-if="section === 'procyon'" style="margin-bottom: 20px">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('all') }"
            @click="changeSector('all')"
          >
            <a>Toutes</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('sud') }"
            @click="changeSector('sud')"
          >
            <a>Sud</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('centre') }"
            @click="changeSector('centre')"
          >
            <a>Centre</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('nord') }"
            @click="changeSector('nord')"
          >
            <a>Nord</a>
          </li>
        </ul>
      </div>
      <div v-if="section === 'gienah'" style="margin-bottom: 20px">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('all') }"
            @click="changeSector('all')"
          >
            <a>Toutes</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('sud-ouest') }"
            @click="changeSector('sud-ouest')"
          >
            <a>Sud-ouest</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('sud-est') }"
            @click="changeSector('sud-est')"
          >
            <a>Sud-est</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('centre-ouest') }"
            @click="changeSector('centre-ouest')"
          >
            <a>Centre-ouest</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('centre-est') }"
            @click="changeSector('centre-est')"
          >
            <a>Centre-est</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('nord-ouest') }"
            @click="changeSector('nord-ouest')"
          >
            <a>Nord-ouest</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('nord-est') }"
            @click="changeSector('nord-est')"
          >
            <a>Nord-est</a>
          </li>
        </ul>
      </div>
      <div v-if="section === 'all'" style="margin-bottom: 20px">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="{ 'uk-active': isActiveSector('all') }"
            @click="changeSector('all')"
          >
            <a>Toutes</a>
          </li>
        </ul>
      </div>

      <div class="uk-margin-medium">
        <div>
          <div style="display: flex; justify-content: space-between">
            <h3 id="table-title" style="margin-bottom: 0">
              Liste des îles ({{ filteredIslands.length }})
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
                <option :value="null">Tri par validation</option>
                <option :value="false">Non-validée</option>
                <option :value="true">Validée</option>
              </select>
            </div>
          </div>

          <div class="uk-inline uk-width-expand uk-margin-top">
            <a class="uk-form-icon" href="#" uk-icon="icon: search"></a>
            <input
              class="uk-input uk-form-small"
              type="text"
              placeholder="Chercher une île"
              v-model="filter"
            />
          </div>

          <table
            class="uk-table uk-table-striped uk-table-hover"
            style="margin-top: 20px"
          >
            <thead>
              <tr>
                <th>Nom</th>
                <th>Obtention</th>
                <th>Description</th>
                <th>Zone</th>
                <th>Validation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="island in filteredIslands" v-bind:key="island.id">
                <td>{{ island.name }}</td>
                <td>{{ island.obtaining }}</td>
                <td>{{ island.description }}</td>
                <td>{{ capitalize(island.zone) }} {{ island.sector }}</td>
                <td>
                  <button
                    class="uk-button uk-button-default uk-button-small"
                    :disabled="island.validated === true"
                  >
                    Valider
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div style="display: flex; justify-content: center; width: 100%">
            <span v-if="!filteredIslands.length">Aucune ile</span>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 70px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/explorations/header.vue";

export default {
  name: "islands",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      section: "all",
      sector: "all",
      validated: null,
      filter: "",
      islands: [
        {
          id: 1,
          name: "Symbole insulaire du Désespoir",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 2,
          name: "Symbole de L'île isolée",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 3,
          name: "Symbole insulaire de l'île aux vagues dorées",
          obtaining: "Coffre",
          zone: "procyon",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 4,
          name: "Symbole insulaire de l'île des Pandas",
          obtaining: "procyondeee",
          zone: "procyon",
          sector: "nord",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 5,
          name: "Symbole insulaire de l'île aux tortues",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 6,
          name: "Symbole insulaire de l'Île de la sérénité",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 7,
          name: "Symbole insulaire du Désespoir",
          obtaining: "Coffre",
          zone: "procyon",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 8,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "nord",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 9,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "centre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 10,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 11,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "sud-ouest",
          description: "Sac secret de Setino",
          validated: true,
        },
        {
          id: 12,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "sud-est",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 123,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "centre-est",
          description: "Sac secret de Setino",
          validated: true,
        },
        {
          id: 124,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "centre-ouest",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 125,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "nord-est",
          description: "Sac secret de Setino",
          validated: true,
        },
        {
          id: 128,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "nord-ouest",
          description: "Sac secret de Setino",
          validated: false,
        },
      ],
      markers: [
        {
          zone: "procyon",
          sector: "nord",
          left: 35.8,
          top: 25.7,
        },
        {
          zone: "gienah",
          sector: "nord-ouest",
          left: 52.4,
          top: 29.7,
        },
        {
          zone: "gienah",
          sector: "nord-est",
          left: 62.6,
          top: 27.3,
        },
        {
          zone: "procyon",
          sector: "centre",
          left: 40.5,
          top: 55.7,
        },
        {
          zone: "gienah",
          sector: "centre-ouest",
          left: 54.6,
          top: 57,
        },
        {
          zone: "procyon",
          sector: "sud",
          left: 37.9,
          top: 82.6,
        },
        {
          zone: "gienah",
          sector: "sud-est",
          left: 66.5,
          top: 69.6,
        },
        {
          zone: "gienah",
          sector: "sud-ouest",
          left: 61.3,
          top: 86.2,
        },
        {
          zone: "gienah",
          sector: "centre-est",
          left: 66,
          top: 51.7,
        },
      ],
    };
  },
  computed: {
    filteredIslands() {
      let newZonesArray = [];
      let finalArray = [];
      this.islands.forEach((element) => {
        if (this.section === "all") {
          newZonesArray.push(element);
        }
        if (this.section === element.zone) {
          newZonesArray.push(element);
        }
      });
      newZonesArray.forEach((element) => {
        if (element.name.includes(this.filter)) {
          finalArray.push(element);
        }
      });
      if (this.sector !== "all") {
        finalArray = finalArray.filter((el) => el.sector === this.sector);
      }
      if (this.validated !== null) {
        finalArray = finalArray.filter((el) => el.validated === this.validated);
      }
      return finalArray;
    },
  },
  methods: {
    changeSection(section) {
      this.section = section;
      this.sector = "all";
    },
    changeSector(sector) {
      this.sector = sector;
    },
    targetZone(zone, sector) {
      this.section = zone;
      this.sector = sector;
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    isActive(section) {
      if (section === this.section) {
        return true;
      } else if (section !== this.section) {
        return false;
      }
    },
    isActiveSector(sector) {
      if (sector === this.sector) {
        return true;
      } else if (sector !== this.sector) {
        return false;
      }
    },
    validate(boolean) {
      this.validated = boolean;
    },
  },
};
</script>

<style></style>
