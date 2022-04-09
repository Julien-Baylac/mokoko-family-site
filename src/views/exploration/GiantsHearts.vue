<template>
  <div class="islands">
    <div class="uk-container">
      <h3 class="uk-article-title uk-margin-medium-top">Coeurs de géants</h3>
      <div class="uk-flex uk-flex-between">
        <div style="margin-top: 20px">
          <dl class="uk-description-list">
            <dt>RECHERCHE DES coeurs de géants</dt>
            <dd>
              Faites une recherche en cliquant sur la l'image ou recherchez
              directement un coeur parmis les
              {{ hearts.length }} référencés
            </dd>
          </dl>
        </div>
      </div>
      <div class="uk-child-width-1" uk-grid>
        <div>
          <div class="uk-inline uk-dark" style="padding-left: 40px">
            <img
              :src="require(`@/assets/img/exploration/heart_map.png`)"
              width="1800"
              height="1200"
              style="border-radius: 10px"
            />
            <a
              v-for="marker in markers"
              v-bind:key="`${marker.id}`"
              class="uk-position-absolute uk-transform-center"
              :style="`left: ${marker.left}%; top: ${marker.top}%`"
              :uk-tooltip="`${getPlace(marker.id)} coeur de géant`"
              @click="targetId(marker.id)"
              uk-marker
            ></a>
          </div>
        </div>
      </div>

      <div class="uk-margin-medium">
        <div>
          <div style="display: flex; justify-content: space-between">
            <h3 id="table-title" style="margin-bottom: 0">
              Liste des Coeurs de géants ({{ filteredHearts.length }})
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
              placeholder="Chercher un coeurs de géants"
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
                v-for="(heart, index) in filteredHearts"
                v-bind:key="heart.id"
              >
                <th>{{ index + 1 }}</th>
                <td>{{ heart.name }}</td>
                <td>{{ heart.obtaining }}</td>
                <td>{{ heart.description }}</td>
                <td>
                  <button
                    class="uk-button uk-button-default uk-button-small"
                    :disabled="heart.validated === true"
                  >
                    Valider
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div style="display: flex; justify-content: center; width: 100%">
            <span v-if="!filteredHearts.length">Aucun coeur</span>
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
  name: "hearts",
  components: {
    Footer,
  },
  data() {
    return {
      heartId: "all",
      validated: null,
      filter: "",
      hearts: [
        {
          id: 1,
          name: "Coeur1",
          obtaining: "Coffre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 2,
          name: "Symbole de L'île isolée",
          obtaining: "Coffre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 3,
          name: "Symbole insulaire de l'île aux vagues dorées",
          obtaining: "Coffre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 4,
          name: "Symbole insulaire de l'île des Pandas",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 5,
          name: "Symbole insulaire de l'île aux tortues",
          obtaining: "Coffre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 6,
          name: "Symbole insulaire de l'Île de la sérénité",
          obtaining: "Coffre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 7,
          name: "Symbole insulaire du Désespoir",
          obtaining: "Coffre",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 8,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 9,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 10,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 11,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: true,
        },
        {
          id: 12,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 13,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: false,
        },
        {
          id: 14,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: true,
        },
        {
          id: 15,
          name: "Symbole insulaire du Désespoir",
          obtaining: "procyondeee",
          description: "Sac secret de Setino",
          validated: false,
        },
      ],
      markers: [
        {
          id: 1,
          left: 22.9,
          top: 22,
        },
        {
          id: 2,
          left: 40.4,
          top: 31.7,
        },
        {
          id: 3,
          left: 51.8,
          top: 31.7,
        },
        {
          id: 4,
          left: 63.3,
          top: 31.7,
        },
        {
          id: 5,
          left: 80.6,
          top: 21.9,
        },
        {
          id: 6,
          left: 25.8,
          top: 49.5,
        },
        {
          id: 7,
          left: 38.8,
          top: 54.5,
        },
        {
          id: 8,
          left: 51.8,
          top: 58.3,
        },
        {
          id: 9,
          left: 64.7,
          top: 55.3,
        },
        {
          id: 10,
          left: 77.8,
          top: 50.4,
        },
        {
          id: 11,
          left: 18.7,
          top: 77,
        },
        {
          id: 12,
          left: 37.5,
          top: 83,
        },
        {
          id: 13,
          left: 51.8,
          top: 83,
        },
        {
          id: 14,
          left: 65.6,
          top: 83,
        },
        {
          id: 15,
          left: 85.2,
          top: 77.8,
        },
      ],
    };
  },
  computed: {
    filteredHearts() {
      let newZonesArray = [];
      let finalArray = [];
      this.hearts.forEach((element) => {
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
    changeSector(sector) {
      this.sector = sector;
    },
    targetId(heartId) {
      this.heartId = heartId;
    },
    getPlace(value) {
      if (value === 1) {
        return value + "er";
      } else if (value === 2) {
        return value + "nd";
      } else {
        return value + "eme";
      }
    },
    validate(boolean) {
      this.validated = boolean;
    },
  },
};
</script>

<style></style>
