<template>
  <div class="ranking">
    <Header
      wallpaper="ranking_wallpaper"
      title="Classements"
      :subtitle="textDt"
      :description="textDd"
    ></Header>
    <div class="uk-container">
      <div class="uk-margin-medium-top" style="margin-bottom: 40px">
        <ul class="uk-flex-center" uk-tab>
          <li class="uk-active" @click="changeSection('ilvl')">
            <a>Top Puissance</a>
          </li>
          <li @click="changeSection('exploration')"><a>Top Explorateur</a></li>
          <li @click="changeSection('collection')">
            <a>Top Collectionneur</a>
          </li>
          <li @click="changeSection('steam')"><a>Top Steam</a></li>
        </ul>
      </div>

      <table class="uk-table uk-table-striped uk-table-justify">
        <thead>
          <tr>
            <th v-for="thead in current_thead" v-bind:key="thead">
              <img
                v-if="checkIcons(thead)"
                :src="require(`@/assets/img/exploration/${thead}.webp`)"
                style="height: 19px; border-radius: 4px"
              />
              <span v-else>{{ thead }}</span>
            </th>
          </tr>
        </thead>
        <tbody v-if="section === 'ilvl'">
          <tr v-for="(player, index) in sortedPlayers" v-bind:key="player.id">
            <td
              class="uk-width-small"
              style="display: flex; justify-content: center; width: 100px"
            >
              <img
                v-if="index + 1 === 1"
                :src="require(`@/assets/img/ranks/${index + 1}.png`)"
                style="height: 25px"
              />
              <span
                v-if="index + 1 === 2"
                style="font-weight: bold; color: grey"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 === 3"
                style="font-weight: bold; color: orange"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 !== 1 && index + 1 !== 2 && index + 1 !== 3"
                >{{ index + 1 }}</span
              >
            </td>
            <td>{{ player.name }}</td>
            <td>{{ player.lvl }}</td>
            <td>{{ player.expedition_lvl }}</td>
            <td>{{ player.skill_points }}</td>
            <td>{{ player.ilvl }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
        <tbody v-if="section === 'exploration'">
          <tr v-for="(player, index) in sortedPlayers" v-bind:key="player.id">
            <td
              class="uk-width-small"
              style="display: flex; justify-content: center; width: 100px"
            >
              <img
                v-if="index + 1 === 1"
                :src="require(`@/assets/img/ranks/${index + 1}.png`)"
                style="height: 25px"
              />
              <span
                v-if="index + 1 === 2"
                style="font-weight: bold; color: grey"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 === 3"
                style="font-weight: bold; color: orange"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 !== 1 && index + 1 !== 2 && index + 1 !== 3"
                >{{ index + 1 }}</span
              >
            </td>
            <td>{{ player.name }}</td>
            <td>{{ player.island_souls }}</td>
            <td>{{ player.giant_hearts }}</td>
            <td>{{ player.omnium_stars }}</td>
            <td>{{ player.masterpieces }}</td>
            <td>{{ player.mokoko_seeds }}</td>
            <td>{{ player.ignea_tokens }}</td>
            <td>{{ player.world_tree_leaves }}</td>
            <td>{{ player.sea_bounties }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
        <tbody v-if="section === 'collection'">
          <tr v-for="(player, index) in sortedPlayers" v-bind:key="player.id">
            <td
              class="uk-width-small"
              style="display: flex; justify-content: center; width: 100px"
            >
              <img
                v-if="index + 1 === 1"
                :src="require(`@/assets/img/ranks/${index + 1}.png`)"
                style="height: 25px"
              />
              <span
                v-if="index + 1 === 2"
                style="font-weight: bold; color: grey"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 === 3"
                style="font-weight: bold; color: orange"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 !== 1 && index + 1 !== 2 && index + 1 !== 3"
                >{{ index + 1 }}</span
              >
            </td>
            <td>{{ player.name }}</td>
            <td>{{ player.mounts }}</td>
            <td>{{ player.pets }}</td>
            <td>{{ player.skins }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
        <tbody v-if="section === 'steam'">
          <tr v-for="(player, index) in sortedPlayers" v-bind:key="player.id">
            <td
              class="uk-width-small"
              style="display: flex; justify-content: center; width: 100px"
            >
              <img
                v-if="index + 1 === 1"
                :src="require(`@/assets/img/ranks/${index + 1}.png`)"
                style="height: 25px"
              />
              <span
                v-if="index + 1 === 2"
                style="font-weight: bold; color: grey"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 === 3"
                style="font-weight: bold; color: orange"
                >{{ index + 1 }}</span
              >
              <span
                v-if="index + 1 !== 1 && index + 1 !== 2 && index + 1 !== 3"
                >{{ index + 1 }}</span
              >
            </td>
            <td>{{ player.name }}</td>
            <td>{{ player.steam_name }}</td>
            <td>{{ player.success }}</td>
            <td>{{ player.total_hours }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/community/header.vue";
import lodash from "lodash";

export default {
  components: { Footer, Header },
  name: "ranking",
  data() {
    return {
      section: "ilvl",
      current_thead: [],
      icons_list: [
        "island_souls",
        "giant_hearts",
        "omnium_stars",
        "masterpieces",
        "mokoko_seeds",
        "ignea_tokens",
        "world_tree_leaves",
        "sea_bounties",
        "skill_points",
        "expedition_lvl",
        "ilvl",
      ],
      thead_ilvl: [
        "Classement",
        "Personnage",
        "Niv.",
        "Exp Niv.",
        "skill_points",
        "ilvl",
        "Score",
      ],
      thead_exploration: [
        "Classement",
        "Personnage",
        "island_souls",
        "giant_hearts",
        "omnium_stars",
        "masterpieces",
        "mokoko_seeds",
        "ignea_tokens",
        "world_tree_leaves",
        "sea_bounties",
        "Score",
      ],
      thead_steam: [
        "Classement",
        "Personnage",
        "Pseudo Steam",
        "Nombre de succés",
        "Temps de jeu",
        "Score",
      ],
      thead_collection: [
        "Classement",
        "Personnage",
        "mounts",
        "Pets",
        "Skins",
        "Score",
      ],
      players: [
        {
          id: 1,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 34,
          total_hours: 543,
          lvl: 50,
          ilvl: 345,
          expedition_lvl: 45,
          skill_points: 120,
          class: "Berserker",
          island_souls: 45,
          giant_hearts: 3,
          omnium_stars: 5,
          masterpieces: 27,
          mokoko_seeds: 71,
          ignea_tokens: 1,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 4,
          pets: 1,
          skins: 58,
        },
        {
          id: 2,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 100,
          total_hours: 87,
          lvl: 52,
          ilvl: 349,
          expedition_lvl: 90,
          skill_points: 339,
          class: "Berserker",
          island_souls: 56,
          giant_hearts: 9,
          omnium_stars: 2,
          masterpieces: 27,
          mokoko_seeds: 731,
          ignea_tokens: 3,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 7,
          pets: 1,
          skins: 34,
        },
        {
          id: 3,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 100,
          total_hours: 646,
          lvl: 54,
          ilvl: 137,
          expedition_lvl: 90,
          skill_points: 339,
          class: "Berserker",
          island_souls: 32,
          giant_hearts: 9,
          omnium_stars: 2,
          masterpieces: 0,
          mokoko_seeds: 70,
          ignea_tokens: 7,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 2,
          pets: 5,
          skins: 34,
        },
        {
          id: 4,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 100,
          total_hours: 646,
          lvl: 54,
          ilvl: 1337,
          expedition_lvl: 90,
          skill_points: 339,
          class: "Berserker",
          island_souls: 32,
          giant_hearts: 9,
          omnium_stars: 2,
          masterpieces: 27,
          mokoko_seeds: 731,
          ignea_tokens: 7,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 7,
          pets: 5,
          skins: 34,
        },
        {
          id: 5,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 100,
          total_hours: 646,
          lvl: 54,
          ilvl: 1300,
          expedition_lvl: 90,
          skill_points: 98,
          class: "Berserker",
          island_souls: 32,
          giant_hearts: 9,
          omnium_stars: 2,
          masterpieces: 27,
          mokoko_seeds: 731,
          ignea_tokens: 7,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 7,
          pets: 5,
          skins: 34,
        },
        {
          id: 6,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 100,
          total_hours: 646,
          lvl: 53,
          ilvl: 765,
          expedition_lvl: 90,
          skill_points: 339,
          class: "Berserker",
          island_souls: 32,
          giant_hearts: 9,
          omnium_stars: 2,
          masterpieces: 27,
          mokoko_seeds: 731,
          ignea_tokens: 7,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 7,
          pets: 5,
          skins: 34,
        },
        {
          id: 7,
          name: "Gregoire666",
          steam_name: "super_Greg123",
          success: 100,
          total_hours: 646,
          lvl: 54,
          ilvl: 476,
          expedition_lvl: 10,
          skill_points: 339,
          class: "Berserker",
          island_souls: 32,
          giant_hearts: 9,
          omnium_stars: 2,
          masterpieces: 27,
          mokoko_seeds: 731,
          ignea_tokens: 7,
          world_tree_leaves: 23,
          sea_bounties: 9,
          mounts: 7,
          pets: 5,
          skins: 34,
        },
      ],
    };
  },
  mounted() {
    this.changeSection(this.section);
  },
  computed: {
    sortedPlayers() {
      let newArray = [];
      this.players.forEach((el) =>
        newArray.push({ ...el, score: this.scoreCalcul(el) })
      );
      return lodash.sortBy(newArray, "score").reverse();
    },
    textDt() {
      if (this.section === "ilvl") {
        return "Barème du Top puissance";
      } else if (this.section === "exploration") {
        return "Barème du Top d'exploration";
      } else if (this.section === "collection") {
        return "Barème du Top de collection";
      } else if (this.section === "steam") {
        return "Barème du Top Steam";
      }
      return "";
    },
    textDd() {
      if (this.section === "ilvl") {
        return "Niveau x10 | Expé niveau x15 | Point x3 | Ilvl x2";
      } else if (this.section === "exploration") {
        return "Symbole x10 | Coeur x10 | étoile x50 | tableau x10 | mokoko x1.5 | Ignéa x200 | feuille x15 | carte x17";
      } else if (this.section === "collection") {
        return "Niveau x10 | Expé niveau x15 | Point x3 | Ilvl x2";
      } else if (this.section === "steam") {
        return "Heure x3 | Succès x20";
      }
      return "";
    },
  },
  methods: {
    changeSection(section) {
      this.section = section;
      if (section === "ilvl") {
        this.current_thead = this.thead_ilvl;
      } else if (section === "exploration") {
        this.current_thead = this.thead_exploration;
      } else if (section === "collection") {
        this.current_thead = this.thead_collection;
      } else if (section === "steam") {
        this.current_thead = this.thead_steam;
      }
    },
    checkIcons(string) {
      if (this.icons_list.indexOf(string) !== -1) {
        return true;
      }
    },
    scoreCalcul(player) {
      let result = 0;
      if (this.section === "ilvl") {
        result =
          result +
          player.lvl * 10 +
          player.ilvl * 2 +
          player.skill_points * 3 +
          player.expedition_lvl * 15;
      } else if (this.section === "exploration") {
        result =
          result +
          player.island_souls * 10 +
          player.giant_hearts * 10 +
          player.omnium_stars * 50 +
          player.masterpieces * 10 +
          player.mokoko_seeds * 1.5 +
          player.world_tree_leaves * 200 +
          player.world_tree_leaves * 200 +
          player.sea_bounties * 15;
      } else if (this.section === "collection") {
        result =
          result + player.mounts * 20 + player.pets * 30 + player.skins * 2;
      } else if (this.section === "steam") {
        result = result + player.total_hours * 3 + player.success * 20;
      }
      return result;
    },
  },
};
</script>

<style></style>
