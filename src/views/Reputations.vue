<template>
  <div class="uk-container reputations">
    <div
      class="uk-margin-medium-top"
      style="display: flex; justify-content: space-between"
    >
      <div>
        <h3 class="uk-article-title">Réputation</h3>
        <dl v-if="sortMethod === 'order'" class="uk-description-list">
          <dt>Classement dans l'ordre des zones</dt>
          <dd>Affiche les zones dans l'ordre de la quète principale</dd>
        </dl>
        <dl v-if="sortMethod === 'collectibles'" class="uk-description-list">
          <dt>Classement pour prioriser l'acquisition des collectibles</dt>
          <dd>Isole les pnjs donnent des collectibles</dd>
        </dl>
        <dl v-if="sortMethod === 'cards'" class="uk-description-list">
          <dt>Classement pour prioriser l'acquisition des cartes</dt>
          <dd>Affiche la couleur des cartes de chaque pnj.</dd>
        </dl>
        <dl v-if="sortMethod === 'igneas'" class="uk-description-list">
          <dt>Classement pour récupérer les symboles d'ignea</dt>
          <dd>
            Les premières zones apparaissent sont les plus faciles à compléter.
          </dd>
        </dl>
      </div>

      <div>
        <ul class="uk-breadcrumb" style="margin-bottom: 10px; margin-top: 35px">
          <li>
            <span style="color: #666">Continents: </span
            ><span :style="'color: ' + percentColor(30)">30%</span>
          </li>
          <li>
            <span style="color: #666">En mer : </span
            ><span :style="'color: ' + percentColor(40)">40%</span>
          </li>
          <li>
            <span style="color: #666">Trixion : </span>
            <span :style="'color: ' + percentColor(0)">0%</span>
          </li>
        </ul>
        <ul class="uk-breadcrumb" style="margin-bottom: 10px; margin-top: 10px">
          <li>
            <span style="color: #666">Coeurs de Géant: </span>
            <span :style="'color: ' + percentColor(40)">40%</span>
          </li>
          <li>
            <span style="color: #666">Étoiles d'Omnium: </span>
            <span :style="'color: ' + percentColor(100)">100%</span>
          </li>
          <li>
            <span style="color: #666">Cartes: </span>
            <span :style="'color: ' + percentColor(63)">63%</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="uk-margin-medium-top" style="margin-bottom: 40px">
      <ul class="uk-flex-center" uk-tab>
        <li class="uk-active" @click="changeSection('order')">
          <a>L'ordre des zones</a>
        </li>
        <li @click="changeSection('collectibles')"><a> Les collectibles</a></li>
        <li @click="changeSection('cards')"><a>Les cartes</a></li>
        <li @click="changeSection('igneas')"><a>Les symboles d'igneas</a></li>
      </ul>
    </div>

    <div
      v-for="zone in sortedZones"
      v-bind:key="zone.id"
      style="margin-top: 25px"
    >
      <div style="display: flex">
        <h3>{{ zone.name }} - {{ TotalPts(zone.pnjs) }} pts</h3>
        <h5 style="margin-top: 10px; margin-left: 10px">
          Reste - {{ TotalPts(zone.pnjs) }} pts
        </h5>
      </div>
      <div
        class="uk-child-width-1-3"
        style="display: flex; padding-left: 40px"
        uk-grid
      >
        <Card
          v-for="pnj in zone.pnjs"
          v-bind:key="pnj.id"
          :imgUrl="pnj.imgUrl"
          :name="pnj.name"
          :location="pnj.location"
          :pts="pnj.pts"
          :id="pnj.id"
          :cards="pnj.cards"
          :hearts="pnj.hearts"
          :stars="pnj.stars"
          :cardColor="cardColoration"
          style="width: 32%; margin-right: 1%"
          :AffinityMax="pnj.AffinityMax"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/reputations/card.vue";
import lodash from "lodash";

export default {
  name: "reputations",
  components: {
    Card,
  },
  data() {
    return {
      sortMethod: "order",
      affinityCompleted: [],
      zones: [
        {
          id: 1001,
          name: "Rétramis",
          pnjs: [
            {
              id: 1,
              name: "Néria",
              imgUrl: "neria",
              location: "Fierbourg",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Neria de Fierbourg",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 2,
              name: "Siéra",
              imgUrl: "siera",
              location: "Fierbourg",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Siera",
                  nb: 2,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1002,
          name: "Yudia",
          pnjs: [
            {
              id: 3,
              name: "Tonnerre",
              imgUrl: "tonnerre",
              location: "Colline de Saland",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Tonnerre",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 4,
              name: "Morina",
              imgUrl: "morina",
              location: "Colline d’Ozhorn",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Morina",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1003,
          name: "Lutéran occidental",
          pnjs: [
            {
              id: 5,
              name: "Urr l'artisan",
              imgUrl: "urr",
              location: "Lacus",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Urr",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1004,
          name: "Lutéran oriental",
          pnjs: [
            {
              id: 6,
              name: "Thirain",
              imgUrl: "thirain",
              location: "Château-Lutéran",
              pts: 78100,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Roi Thirain",
                  nb: 1,
                  rarity: "carte-legendaire",
                  importance: 2,
                },
              ],
            },
            {
              id: 7,
              name: "Vivianne",
              imgUrl: "vivianne",
              location: "Château-Lutéran",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Vivianne",
                  nb: 1,
                  rarity: "carte-gris",
                  importance: 2,
                },
              ],
            },
            {
              id: 8,
              name: "Néria",
              imgUrl: "neria2",
              location: "Château-Lutéran",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Neria de Château-Lutéran",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 9,
              name: "Elia Nahun",
              imgUrl: "elia",
              location: "Plaine de Dyorika",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 10,
              name: "Norin Nahun",
              imgUrl: "norin",
              location: "Plaine de Dyorika",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 11,
              name: "Apprenti Forgeron Turner",
              imgUrl: "turner",
              location: "Plaine de Dyorika",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 12,
              name: "Cals",
              imgUrl: "cals",
              location: "Port de Rivague",
              pts: 78100,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Cals",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 13,
              name: "Néria",
              imgUrl: "neria3",
              location: "Port de Rivague",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Neria du port de Rivague",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1005,
          name: "Tortoyk",
          pnjs: [
            {
              id: 14,
              name: "Dakudaku",
              imgUrl: "dakudaku",
              location: "Village mokoko",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Dakudaku",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
            {
              id: 15,
              name: "Mokamoka",
              imgUrl: "mokamoka",
              location: "Village mokoko",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Mokamoka",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
            {
              id: 16,
              name: "Totoma",
              imgUrl: "totoma",
              location: "Village mokoko",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Totoma",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1006,
          name: "Anich",
          pnjs: [
            {
              id: 17,
              name: "Sorang",
              imgUrl: "sorang",
              location: "Vallée de Prisma",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 18,
              name: "Fantôme de Ryeon",
              imgUrl: "fantome",
              location: "Forêt Mélodieuse",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Esprit vengeur",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
            {
              id: 19,
              name: "Yuul",
              imgUrl: "yuul",
              location: "Ville portuaire de Changhun",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Yuul",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1007,
          name: "Arthéline",
          pnjs: [
            {
              id: 20,
              name: "Bastian",
              imgUrl: "bastian",
              location: "Les origines de Stern",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Bastian",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
            {
              id: 21,
              name: "Sasha",
              imgUrl: "sasha",
              location: "Les origines de Stern",
              pts: 103700,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Sasha",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
              hearts: [
                {
                  name: "3e cœur de géant",
                },
              ],
            },
            {
              id: 22,
              name: "Néria",
              imgUrl: "neria4",
              location: "Les origines de Stern",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Neria de Stern",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 23,
              name: "Mercenaire Zeira",
              imgUrl: "zeira",
              location: "Les origines de Stern",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Zeira",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
            {
              id: 24,
              name: "Orne",
              imgUrl: "orne",
              location: "Totrich",
              pts: 6000,
              AffinityMax: "Confiance",
            },
          ],
        },
        {
          id: 1008,
          name: "Bern Nord",
          pnjs: [
            {
              id: 25,
              name: "Gideon",
              imgUrl: "gideon",
              location: "Village de Rania",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Gideon",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 26,
              name: "Anabel",
              imgUrl: "anabel",
              location: "Village de Rania",
              pts: 18000,
              AffinityMax: "Confiance",
            },
            {
              id: 27,
              name: "Aventuriere Selfa",
              imgUrl: "selfa",
              location: "Forêt de Parna",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 28,
              name: "Pailin",
              imgUrl: "pailin",
              location: "Forêt bernoise",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Pailin",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 29,
              name: "Ealyn",
              imgUrl: "ealyn",
              location: "Château-Bern",
              pts: 104100,
              AffinityMax: "Confiance",
            },
            {
              id: 30,
              name: "Avele",
              imgUrl: "avele",
              location: "Château-Bern",
              pts: 78100,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Avele",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1009,
          name: "Silensierra",
          pnjs: [
            {
              id: 31,
              name: "Propriétaire de ranch Jude",
              imgUrl: "jude",
              location: "Mer Gelée",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 32,
              name: "Sauver de l'aube Javern",
              imgUrl: "siera",
              location: "Rigens",
              pts: 18000,
              AffinityMax: "Confiance",
            },
            {
              id: 33,
              name: "Dath des loups gris",
              imgUrl: "dath",
              location: "Plateau de Givresang",
              pts: 6000,
              AffinityMax: "Confiance",
            },
            {
              id: 34,
              name: "Poppy",
              imgUrl: "poppy",
              location: "Falaise d’Hiémaile",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Poppy",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1010,
          name: "Rohendel",
          pnjs: [
            {
              id: 35,
              name: "Azena",
              imgUrl: "azena",
              location: "Rothun",
              pts: 78100,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Azena et Inanna",
                  nb: 1,
                  rarity: "carte-legendaire",
                  importance: 2,
                },
              ],
            },
            {
              id: 36,
              name: "Orelda",
              imgUrl: "orelda",
              location: "Lac du Lotus de verre",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Orelda",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 37,
              name: "Lenora",
              imgUrl: "lenora",
              location: "Ombre d’Elzowin",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Lenora",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
          ],
        },
        //webp
        {
          id: 1011,
          name: "Yorn",
          pnjs: [
            {
              id: 38,
              name: "Kaysarr",
              imgUrl: "kaysarr",
              location: "Grand Château",
              pts: 58150,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Kaysarr",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
            {
              id: 39,
              name: "Néria",
              imgUrl: "neria5",
              location: "Grand Château",
              pts: 58150,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Neria (Yorn)",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 40,
              name: "Danseur Imar",
              imgUrl: "imar",
              location: "Grand Château",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Danseur Imar",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
          ],
        },
        {
          id: 1012,
          name: "Feiton",
          pnjs: [
            {
              id: 41,
              name: "Jederico",
              imgUrl: "jederico",
              location: "La vallée sans nom",
              pts: 58150,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Jederico",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
            {
              id: 42,
              name: "Lutia",
              imgUrl: "lutia",
              location: "Kalaja",
              pts: 58150,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Lutia",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
            {
              id: 43,
              name: "Navi",
              imgUrl: "navi",
              location: "Kalaja",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Navi",
                  nb: 1,
                  rarity: "carte-gris",
                  importance: 2,
                },
              ],
            },
            {
              id: 44,
              name: "Levi",
              imgUrl: "levi",
              location: "Kalaja",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Levi",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
          ],
        },
        //png
        {
          id: 1013,
          name: "Punika",
          pnjs: [
            {
              id: 45,
              name: "Yom l’écureuil",
              imgUrl: "yom",
              location: "Village des Nias",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Yom l’écureuil",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 46,
              name: "Hariya",
              imgUrl: "hariya",
              location: "Village des Nias",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Hariya",
                  nb: 1,
                  rarity: "carte-commune",
                  importance: 2,
                },
              ],
            },
            {
              id: 47,
              name: "Jahara",
              imgUrl: "jahara",
              location: "Village des Nias",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Jahara",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 48,
              name: "Nia",
              imgUrl: "nia",
              location: "Village des Nias",
              pts: 58150,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Shana",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
              stars: [
                {
                  name: "Étoile d’Orpheus #3",
                },
              ],
            },
            {
              id: 49,
              name: "Shana",
              imgUrl: "shana",
              location: "Village des Nias",
              pts: 58150,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Shana",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
            {
              id: 50,
              name: "Nagi",
              imgUrl: "nagi",
              location: "Village des Nias",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Nagi",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 51,
              name: "Liru",
              imgUrl: "liru",
              location: "Village des Nias",
              pts: 38200,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Liru",
                  nb: 1,
                  rarity: "carte-rare",
                  importance: 2,
                },
              ],
            },
            {
              id: 52,
              name: "Sapiano le renard",
              imgUrl: "sapiano",
              location: "Village des Nias",
              pts: 6000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Sapiano le Renard",
                  nb: 1,
                  rarity: "carte-gris",
                  importance: 2,
                },
              ],
            },
            {
              id: 53,
              name: "Carte Berver",
              imgUrl: "carte",
              location: "Village des Nias",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Carte Berver",
                  nb: 1,
                  rarity: "carte-gris",
                  importance: 2,
                },
              ],
            },
            {
              id: 54,
              name: "Albion",
              imgUrl: "albion",
              location: "Village des Nias",
              pts: 18000,
              AffinityMax: "Confiance",
              cards: [
                {
                  name: "Carte Albion",
                  nb: 1,
                  rarity: "carte-epique",
                  importance: 2,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    sortedZones() {
      let zones = null;
      if (this.sortMethod === "order") {
        zones = this.zones;
      } else if (this.sortMethod === "igneas") {
        zones = this.sortedZonesIgnea;
      } else if (this.sortMethod === "collectibles") {
        zones = this.sortedZonesCollectible;
      } else if (this.sortMethod === "cards") {
        zones = this.sortedZonesCard;
      }
      return zones;
    },
    sortedZonesIgnea() {
      let newZoneArray = [];
      this.zones.forEach((zone) => {
        newZoneArray.push({
          pointsRemaining: this.pointsRemaining(zone.pnjs),
          ...zone,
        });
      });
      let newZones = lodash.sortBy(newZoneArray, "pointsRemaining");
      return newZones;
    },
    sortedZonesCollectible() {
      let newZoneArray = [];
      this.zones.forEach((zone) => {
        let newCharArray = [];
        zone.pnjs.forEach((char) => {
          if (char.hearts || char.stars) {
            newCharArray.push(char);
          }
        });
        if (newCharArray.length) {
          newZoneArray.push({
            id: zone.id,
            name: zone.name,
            pnjs: newCharArray,
          });
        }
      });
      return newZoneArray;
    },
    sortedZonesCard() {
      let newZoneArray = [];
      this.zones.forEach((zone) => {
        let newCharArray = [];
        zone.pnjs.forEach((char) => {
          if (char.cards) {
            newCharArray.push(char);
          }
        });
        if (newCharArray.length) {
          newZoneArray.push({
            id: zone.id,
            name: zone.name,
            pnjs: newCharArray,
          });
        }
      });
      return newZoneArray;
    },
    cardColoration() {
      if (this.sortMethod === "cards") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    changeSection(method) {
      this.sortMethod = method;
    },
    percentColor(percent) {
      let color = "black";
      if (percent < 20) {
        color = "red";
      } else if (percent > 20 && percent < 49) {
        color = "orange";
      } else if (percent > 49 && percent < 79) {
        color = "lightgreen";
      } else if (percent === 100) {
        color = "green";
      }
      return color;
    },
    TotalPts(pnjs) {
      let total = 0;
      pnjs.forEach((el) => {
        total = total + el.pts;
      });
      return total;
    },
    pointsRemaining(pnjs) {
      let total = 0;
      pnjs.forEach((el) => {
        total = total + el.pts;
      });
      return total;
    },
  },
};
</script>

<style></style>
