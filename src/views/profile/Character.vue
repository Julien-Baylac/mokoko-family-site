<template>
  <div class="character">
    <div
      class="uk-flex uk-flex-between uk-background-cover uk-light"
      :data-src="require(`@/assets/img/profile/selfi.jpg`)"
      style="border-radius: 10px; height: 550px"
      uk-img
    >
      <div class="left-part" style="margin-top: 3.5%">
        <ul
          class="uk-thumbnav uk-thumbnav-vertical left-part-in"
          style="background-color: rgba(0, 0, 0, 0.5)"
          uk-margin
        >
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +{{
                  casqueLvl
                }}</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
        </ul>
      </div>

      <div
        class="right-part"
        style="margin-top: 3.5%; background-color: rgba(0, 0, 0, 0.5)"
      >
        <ul class="uk-thumbnav uk-thumbnav-vertical" uk-margin>
          <li class="uk-active">
            <img
              :src="require(`@/assets/img/profile/stuff/item1.webp`)"
              style="background-color: purple; border-radius: 5px"
              width="50"
              height="50"
            />
            <span style="margin-left: 10px"
              >+12 <span uk-icon="triangle-left"></span> Tier 1</span
            >
          </li>
          <li class="uk-active">
            <img
              :src="require(`@/assets/img/profile/stuff/item1.webp`)"
              style="background-color: purple; border-radius: 5px"
              width="50"
              height="50"
            />
            <span style="margin-left: 10px"
              >+12 <span uk-icon="triangle-left"></span> Tier 1</span
            >
          </li>
          <li class="uk-active">
            <img
              :src="require(`@/assets/img/profile/stuff/item1.webp`)"
              style="background-color: purple; border-radius: 5px"
              width="50"
              height="50"
            />
            <span style="margin-left: 10px"
              >+12 <span uk-icon="triangle-left"></span> Tier 1</span
            >
          </li>
          <li class="uk-active">
            <img
              :src="require(`@/assets/img/profile/stuff/item1.webp`)"
              style="background-color: purple; border-radius: 5px"
              width="50"
              height="50"
            />
            <span style="margin-left: 10px"
              >+12 <span uk-icon="triangle-left"></span> Tier 1</span
            >
          </li>
          <li class="uk-active">
            <img
              :src="require(`@/assets/img/profile/stuff/item1.webp`)"
              style="background-color: purple; border-radius: 5px"
              width="50"
              height="50"
            />
            <span style="margin-left: 10px"
              >+12 <span uk-icon="triangle-left"></span> Tier 1</span
            >
          </li>
          <li class="uk-active">
            <div href="#" class="uk-flex">
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px; max-height: 50px; font-size: 12px"
                ><span style="font-size: 15px">Tier 1</span><br />+5 Charge
                lourde <br />+6 Barricade <br />+3 Réduction de défence</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="first-form">
      <h2 style="margin-top: 50px">Informations générales</h2>
      <div style="display: flex; justify-content: space-between">
        <div style="width: 49%" class="uk-inline">
          <input class="uk-input" type="text" placeholder="Nom du personnage" />
        </div>
      </div>
      <div
        style="display: flex; justify-content: space-between; margin-top: 20px"
      >
        <div style="width: 49%">
          <label class="uk-form-label" for="form-horizontal-select"
            >Choix du serveur</label
          >
          <div class="uk-form-controls">
            <select class="uk-select" id="form-horizontal-select">
              <option>Zinnervale</option>
              <option>Trixion</option>
            </select>
          </div>
        </div>
        <div style="width: 49%">
          <label class="uk-form-label" for="form-horizontal-select"
            >Choix de la guilde</label
          >
          <div class="uk-form-controls">
            <select class="uk-select" id="form-horizontal-select">
              <option>Mokoko Family</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="second-form">
      <h2 style="margin-top: 50px">Informations de combat</h2>
      <div style="display: flex; justify-content: space-between">
        <div style="width: 49%" class="uk-inline">
          <input class="uk-input" type="text" placeholder="Niveau" />
        </div>
        <div style="width: 49%" class="uk-inline">
          <input
            class="uk-input"
            type="text"
            placeholder="Niveau d'expedition"
          />
        </div>
      </div>
      <div
        style="display: flex; justify-content: space-between; margin-top: 20px"
      >
        <div style="width: 49%" class="uk-inline">
          <input class="uk-input" type="text" placeholder="Niveau d'objet" />
        </div>
        <div style="width: 49%" class="uk-inline">
          <input
            class="uk-input"
            type="text"
            placeholder="Points de compétence"
          />
        </div>
      </div>
      <div
        style="display: flex; justify-content: space-between; margin-top: 20px"
      >
        <div style="width: 49%">
          <label class="uk-form-label" for="form-horizontal-select"
            >Choix de la classe</label
          >
          <div class="uk-form-controls">
            <select class="uk-select" id="form-horizontal-select">
              <option>Warlord</option>
              <option>autre</option>
            </select>
          </div>
        </div>
        <div style="width: 49%">
          <label class="uk-form-label" for="form-horizontal-select"
            >Choix de la spécialité</label
          >
          <div class="uk-form-controls">
            <select class="uk-select" id="form-horizontal-select">
              <option>Chevalier solitaire</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="char-table" style="margin-top: 50px; margin-bottom: 100px">
      <h2 class="uk-h2">Equipement</h2>
      <table class="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>Icone</th>
            <th>Type</th>
            <th>Palier d'objet</th>
            <th>Rang de l'objet</th>
            <th>Niveau</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type, index) in stuffTypes" v-bind:key="type">
            <td>
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="
                  background-color: purple;
                  border-radius: 5px;
                  margin-left: 10px;
                "
                width="40"
                height="40"
              />
            </td>
            <td style="display: flex">
              <div style="margin-top: 7px">{{ type }}</div>
            </td>
            <td>
              <select class="uk-select" id="form-stacked-select">
                <option>Palier 1</option>
                <option>Palier 2</option>
                <option>Palier 3</option>
              </select>
            </td>
            <td>
              <select class="uk-select" id="form-stacked-select">
                <option>Normal</option>
                <option>Inhabituel</option>
                <option>Rare</option>
                <option>Epique</option>
                <option>Légendaire</option>
                <option>Relique</option>
              </select>
            </td>
            <td>
              <input
                v-if="index < 6"
                class="uk-input"
                type="number"
                style="width: 80px"
                v-model="casqueLvl"
                min="1"
                max="15"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      casqueLvl: 1,
      stuffTypes: [
        "Tête",
        "Epaule",
        "Torse",
        "Jambes",
        "Mains",
        "Arme",
        "Collier",
        "Boucle 1",
        "Boucle 2",
        "Bague 1",
        "Bague 2",
        "Pierre",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.left-part {
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
  width: 18%;
  .left-part-in {
    padding: 25px;
    border-radius: 5px;
  }
}
.right-part {
  display: flex;
  justify-content: flex-start;
  margin-right: 30px;
  width: 18%;
  padding: 25px;
  border-radius: 5px;
}
</style>
