<template>
  <div class="islands">
    <div class="uk-container">
      <h3 class="uk-article-title uk-margin-medium-top">
        Feuilles de l'Arbre-Monde
      </h3>
      <div class="uk-flex uk-flex-between">
        <div style="margin-top: 20px">
          <dl class="uk-description-list">
            <dt>Recherche des feuilles de l'arbre-monde</dt>
            <dd>
              Faites une recherche par type de recolte en cliquant sur l'image
              ou recherchez directement une feuille parmis les
              {{ islands.length }} référencées
            </dd>
          </dl>
        </div>
      </div>
      <div class="uk-child-width-1" uk-grid>
        <div>
          <div class="uk-inline uk-dark" style="padding-left: 40px">
            <img
              :src="require(`@/assets/img/exploration/farm_map.png`)"
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

      <div class="uk-margin-medium">
        <div>
          <div style="display: flex; justify-content: space-between">
            <h3 id="table-title" style="margin-bottom: 0">
              Liste des feuilles de l'arbre-monde ({{ filteredIslands.length }})
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
              placeholder="Chercher une feuille"
              v-model="filter"
            />
          </div>

          <table
            class="uk-table uk-table-striped uk-table-hover"
            style="margin-top: 20px"
          >
            <thead>
              <tr>
                <th>Numéro</th>
                <th>Nom</th>
                <th>Obtention</th>
                <th>Description</th>
                <th>Validation</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(island, index) in filteredIslands"
                v-bind:key="island.id"
              >
                <th>{{ index + 1 }}</th>
                <td>{{ island.name }}</td>
                <td>{{ island.obtaining }}</td>
                <td>{{ island.description }}</td>
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
            <span v-if="!filteredIslands.length">Aucune feuille</span>
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
          name: "Coeur1",
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
      ],
      markers: [
        {
          zone: "procyon",
          sector: "nord",
          left: 18.5,
          top: 64,
        },
        {
          zone: "procyon",
          sector: "nord",
          left: 38,
          top: 41.6,
        },
        {
          zone: "procyon",
          sector: "nord",
          left: 65.2,
          top: 41.6,
        },
        {
          zone: "procyon",
          sector: "nord",
          left: 38,
          top: 90.6,
        },
        {
          zone: "procyon",
          sector: "nord",
          left: 65.2,
          top: 90.6,
        },
        {
          zone: "procyon",
          sector: "nord",
          left: 84.5,
          top: 64,
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
    validate(boolean) {
      this.validated = boolean;
    },
  },
};
</script>

<style></style>
