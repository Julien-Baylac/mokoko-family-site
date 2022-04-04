<template>
  <div class="islands">
    <div class="uk-container">
      <h3 class="uk-article-title uk-margin-medium-top">Symboles insulaires</h3>
      <div class="uk-flex uk-flex-between">
        <div style="margin-top: 20px">
          <dl class="uk-description-list">
            <dt>Barème du Top puissance</dt>
            <dd>Niveau x10 | Expé niveau x15 | Point x3 | Ilvl x2</dd>
          </dl>
        </div>
      </div>
      <div class="uk-child-width-1" uk-grid>
        <div>
          <div class="uk-inline uk-dark" style="padding-left: 40px">
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
      <div v-show="section === 'procyon'" style="margin-bottom: 20px">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="{ 'uk-active': isActive('sud') }"
            @click="changeSector('sud')"
          >
            <a>Sud</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActive('centre') }"
            @click="changeSector('centre')"
          >
            <a>Centre</a>
          </li>
          <li
            v-bind:class="{ 'uk-active': isActive('nord') }"
            @click="changeSector('nord')"
          >
            <a>Nord</a>
          </li>
        </ul>
      </div>
      <div v-show="section === 'gienah'" style="margin-bottom: 20px">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="'uk-active' ? isActiveSector('sud-ouest') : ''"
            @click="changeSector('sud-ouest')"
          >
            <a>Sud-ouest</a>
          </li>
          <li
            v-bind:class="'uk-active' ? isActiveSector('sud-est') : ''"
            @click="changeSector('sud-est')"
          >
            <a>Sud-est</a>
          </li>
          <li
            v-bind:class="'uk-active' ? isActiveSector('centre-ouest') : ''"
            @click="changeSector('centre-ouest')"
          >
            <a>Centre-ouest</a>
          </li>
          <li
            v-bind:class="'uk-active' ? isActiveSector('centre-est') : ''"
            @click="changeSector('centre-est')"
          >
            <a>Centre-est</a>
          </li>
          <li
            v-bind:class="'uk-active' ? isActiveSector('nord-ouest') : ''"
            @click="changeSector('nord-ouest')"
          >
            <a>Nord-ouest</a>
          </li>
          <li
            v-bind:class="'uk-active' ? isActiveSector('nord-est') : ''"
            @click="changeSector('nord-est')"
          >
            <a>Nord-est</a>
          </li>
        </ul>
      </div>
      <div v-show="section === 'all'" style="margin-bottom: 20px">
        <ul class="uk-flex-center" uk-tab>
          <li
            v-bind:class="'uk-active' ? isActiveSector('all') : ''"
            @click="changeSector('all')"
          >
            <a>Toutes</a>
          </li>
        </ul>
      </div>

      <div class="uk-inline uk-width-expand">
        <a class="uk-form-icon" href="#" uk-icon="icon: search"></a>
        <input
          class="uk-input uk-form-small"
          type="text"
          placeholder="Chercher une île"
          v-model="filter"
        />
      </div>
      <div class="uk-margin-medium">
        <div>
          <div style="display: flex; justify-content: space-between">
            <h3 id="table-title" style="margin-bottom: 0">
              Liste des îles ({{ filteredIslands.length }})
            </h3>
            <div>
              <button
                style="margin-right: 10px"
                class="uk-button uk-button-default uk-button-small"
                :disabled="this.validated === null"
                @click="validate(null)"
              >
                Annuler
              </button>
              <div class="uk-button-group">
                <button
                  class="uk-button uk-button-default uk-button-small"
                  v-bind:class="{
                    'uk-button-secondary': this.validated === false,
                  }"
                  @click="validate(false)"
                >
                  Non-validée
                </button>
                <button
                  class="uk-button uk-button-default uk-button-small"
                  v-bind:class="{
                    'uk-button-secondary': this.validated === true,
                  }"
                  @click="validate(true)"
                >
                  Validée
                </button>
              </div>
            </div>
          </div>

          <table class="uk-table uk-table-striped" style="margin-top: 20px">
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
                  <button class="uk-button uk-button-default uk-button-small">
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
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "islands",
  components: {
    Footer,
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
          comment: "comme ca",
        },
        {
          id: 2,
          name: "Symbole de L'île isolée",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          comment: "comme ca",
        },
        {
          id: 3,
          name: "Symbole insulaire de l'île aux vagues dorées",
          obtaining: "Coffre",
          zone: "procyon",
          sector: "sud",
          description: "Sac secret de Setino",
          comment: "comme ca",
        },
        {
          id: 4,
          name: "Symbole insulaire de l'île des Pandas",
          obtaining: "procyondeee",
          zone: "procyon",
          sector: "nord",
          description: "Sac secret de Setino",
          comment: "comme ca",
        },
        {
          id: 5,
          name: "Symbole insulaire de l'île aux tortues",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          comment: "comme ca",
        },
        {
          id: 6,
          name: "Symbole insulaire de l'Île de la sérénité",
          obtaining: "Coffre",
          zone: "gienah",
          sector: "sud",
          description: "Sac secret de Setino",
          comment: "comme ca",
        },
        {
          id: 7,
          name: "Symbole insulaire du Désespoir",
          obtaining: "Coffre",
          zone: "procyon",
          sector: "sud",
          description: "Sac secret de Setino",
          comment: "comme ca",
        },
        {
          id: 8,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          zone: "gienah",
          sector: "nord",
          description: "Sac secret de Setino",
          comment: "comme ca",
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
          zone: "geniah",
          sector: "nord-ouest",
          left: 52.4,
          top: 29.7,
        },
        {
          zone: "geniah",
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
      return finalArray;
    },
  },
  methods: {
    changeSection(section) {
      this.section = section;
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
      } else {
        return false;
      }
    },
    isActiveSector(sector) {
      if (sector === this.sector) {
        return true;
      } else {
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
