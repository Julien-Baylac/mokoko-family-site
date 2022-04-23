<template>
  <div class="omnium-stars">
    <div>
      <Header
        wallpaper="stars_wallpaper"
        title="Etoiles d'omnium"
        subtitle="RECHERCHE DES étoiles d'omnium"
        :description="`Faites une recherche en cliquant sur la l'image ou recherchez directement un étoiles parmis les ${stars.length} référencées`"
      ></Header>
      <div class="uk-container" style="margin-top: 70px">
        <div>
          <div class="uk-inline uk-dark">
            <img
              :src="require(`@/assets/img/exploration/stars_map.png`)"
              width="1800"
              height="1200"
              style="border-radius: 10px"
            />
            <a
              v-for="marker in markers"
              v-bind:key="`${marker.zone}`"
              class="uk-position-absolute uk-transform-center"
              :style="`left: ${marker.left}%; top: ${marker.top}%`"
              :uk-tooltip="`${capitalize(marker.zone)} ${marker.sector}`"
              @click="targetZone(marker.zone, marker.sector)"
              uk-marker
            ></a>
          </div>
        </div>
      </div>

      <div class="uk-margin-medium uk-container">
        <div>
          <div style="display: flex; justify-content: space-between">
            <h3 id="table-title" style="margin-bottom: 0">
              Liste des étoiles d'omnium ({{ filteredStars.length }})
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
              placeholder="Chercher une étoile"
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
              <tr v-for="(star, index) in filteredStars" v-bind:key="star.id">
                <th>{{ index + 1 }}</th>
                <td>{{ star.name }}</td>
                <td>{{ star.obtaining }}</td>
                <td>{{ star.description }}</td>
                <td>
                  <button
                    class="uk-button uk-button-default uk-button-small"
                    :disabled="star.validated === true"
                  >
                    Valider
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div style="display: flex; justify-content: center; width: 100%">
            <span v-if="!filteredStars.length">Aucune ile</span>
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
  name: "omnium-stars",
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
      stars: [
        {
          id: 1,
          name: "Coeur n1",
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
          left: 15,
          top: 32.7,
        },
        {
          zone: "procyon",
          left: 31,
          top: 28,
        },
        {
          zone: "procyon",
          left: 53.3,
          top: 20,
        },
        {
          zone: "procyon",
          left: 84.5,
          top: 22,
        },
        {
          zone: "procyon",
          left: 20,
          top: 73.9,
        },
        {
          zone: "procyon",
          left: 52,
          top: 66,
        },
        {
          zone: "procyon",
          left: 65.2,
          top: 50,
        },
      ],
    };
  },
  computed: {
    filteredStars() {
      let newZonesArray = [];
      let finalArray = [];
      this.stars.forEach((element) => {
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
