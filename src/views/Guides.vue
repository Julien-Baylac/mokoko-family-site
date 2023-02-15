<template>
  <div style="margin-top: 20px">
    <GuidePanel :panels="panels">
      <template v-slot:slot-Classes>
        <div v-if="!selectedClassType && !selectedClassGender">
          <div v-for="classType in classes" :key="classType.name">
            <div style="margin-top: 10px">
              <span>{{ classType.name }}</span>
              <div class="uk-text-center" uk-grid>
                <div class="uk-width-1-2" style="padding: 5px">
                  <div
                    class="uk-card uk-card-small uk-card-body elevation-card"
                    style="border-radius: 5px"
                    @click="changeClassType(classType, 0)"
                  >
                    Homme
                  </div>
                </div>
                <div class="uk-width-1-2" style="padding: 5px">
                  <div
                    class="uk-card uk-card-small uk-card-body elevation-card"
                    style="border-radius: 5px"
                    @click="changeClassType(classType, 1)"
                  >
                    Femme
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <a
            class="uk-icon-button"
            @click="changeClassType(null, null)"
            uk-icon="arrow-left"
            style="margin-bottom: 20px"
          ></a>

          <div>
            <span
              >Classes de {{ selectedClassType.name.toLowerCase() }}
              {{ selectedClassGender === 0 ? "masculine" : "féminine" }}</span
            >
            <div class="uk-text-center" uk-grid>
              <div
                v-for="item in selectedClassType.list[selectedClassGender]"
                :key="item.name"
                class="uk-width-1-1"
                style="padding: 5px"
              >
                <router-link :to="`/${item.route}`">
                  <div
                    class="uk-card uk-card-default uk-card-body elevation-card"
                    style="border-radius: 5px"
                  >
                    {{ item.name }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:slot-Raids>
        <div v-if="!selectedGuardianLvl">
          <div v-for="raidType in raids" :key="raidType.name">
            <div v-if="raidType.secondStep" style="margin-top: 30px">
              <div style="margin-top: 10px">
                <span>{{ raidType.name }}</span>
                <div class="uk-text-center" uk-grid>
                  <div
                    v-for="guardian in raidType.list"
                    :key="guardian.name"
                    class="uk-width-1-3"
                    style="padding: 5px"
                  >
                    <div
                      class="uk-card uk-card-small uk-card-body elevation-card"
                      style="border-radius: 5px"
                      @click="changeGuardianLvl(guardian)"
                    >
                      {{ guardian.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else style="margin-top: 30px">
              <span>{{ raidType.name }}</span>
              <div class="uk-text-center" uk-grid>
                <div
                  v-for="raid in raidType.list"
                  :key="raid.name"
                  class="uk-width-1-2"
                  style="padding: 5px"
                >
                  <router-link :to="`/${raid.route}`">
                    <div
                      class="uk-card uk-card-small uk-card-body elevation-card"
                      style="border-radius: 5px"
                    >
                      {{ raid.name }}
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <a
            class="uk-icon-button"
            @click="changeGuardianLvl(null)"
            uk-icon="arrow-left"
            style="margin-bottom: 20px"
          ></a>

          <div>
            <span
              >Guardien de tiers
              {{ selectedGuardianLvl.name.toLowerCase() }}</span
            >
            <div class="uk-text-center" uk-grid>
              <div
                v-for="item in selectedGuardianLvl.list"
                :key="item.name"
                class="uk-width-1-1"
                style="padding: 5px"
              >
                <router-link :to="`/${item.route}`">
                  <div
                    class="uk-card uk-card-default uk-card-body elevation-card"
                    style="border-radius: 5px"
                  >
                    {{ item.name }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:slot-Exploration>
        <div v-for="explorationType in exploration" :key="explorationType.name">
          <div style="margin-top: 10px">
            <span>{{ explorationType.name }}</span>
            <div class="uk-text-center" uk-grid>
              <div
                v-for="item in explorationType.list"
                :key="item.name"
                class="uk-width-1-2"
                style="padding: 5px"
              >
                <router-link :to="`/${item.route}`">
                  <div
                    class="uk-card uk-card-small uk-card-body elevation-card"
                    style="border-radius: 5px"
                  >
                    {{ item.name }}
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:slot-Collections>
        <span>Raid légendaire</span>
        <div class="uk-text-center" uk-grid>
          <div
            v-for="item in collections"
            :key="item.name"
            class="uk-width-1-1"
            style="padding: 5px"
          >
            <router-link :to="`/${item.route}`">
              <div
                class="uk-card uk-card-small uk-card-body elevation-card"
                style="border-radius: 5px"
              >
                {{ item.name }}
              </div>
            </router-link>
          </div>
        </div>
      </template>
    </GuidePanel>
    <Footer style="margin-top: 30px" />
  </div>
</template>

<script>
import GuidePanel from "@/components/guides/guide-panel.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Guides",
  components: {
    Footer,
    GuidePanel,
  },
  data() {
    return {
      selectedClassType: null,
      selectedClassGender: null,
      selectedGuardianLvl: null,
      panels: [
        {
          name: "Classes",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
          name: "Raids",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
        },
        {
          name: "Exploration",
          description: "azeazeazeaz",
        },
        {
          name: "Collections",
          description:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        },
      ],
      classes: [
        {
          name: "Guerriers",
          list: [
            [
              {
                name: "Berzerker",
                route: "zerk",
              },
              {
                name: "Berzerker",
                route: "zerk",
              },
              {
                name: "Berzerker",
                route: "zerk",
              },
              {
                name: "Berzerker",
                route: "zerk",
              },
            ],
            [
              {
                name: "Berzerker",
                route: "zerk",
              },
            ],
          ],
        },
        {
          name: "Moniales",
          list: [
            [
              {
                name: "Berzerker",
                route: "zerk",
              },
              {
                name: "Berzerker",
                route: "zerk",
              },
              {
                name: "Berzerker",
                route: "zerk",
              },
              {
                name: "Berzerker",
                route: "zerk",
              },
            ],
            [
              {
                name: "Berzerker",
                route: "zerk",
              },
            ],
          ],
        },
      ],
      raids: [
        {
          name: "Gardiens par tiers",
          secondStep: true,
          list: [
            {
              name: "T1",
              list: [
                {
                  name: "Berzerker",
                  route: "zerk",
                },
                {
                  name: "Berzerker",
                  route: "zerk",
                },
                {
                  name: "Berzerker",
                  route: "zerk",
                },
                {
                  name: "Berzerker",
                  route: "zerk",
                },
              ],
            },
            {
              name: "T2",
              list: [
                {
                  name: "Berzerker",
                  route: "zerk",
                },
                {
                  name: "Berzerker",
                  route: "zerk",
                },
                {
                  name: "Berzerker",
                  route: "zerk",
                },
                {
                  name: "Berzerker",
                  route: "zerk",
                },
              ],
            },
          ],
        },
        {
          name: "Raids legendaire",
          list: [
            {
              name: "Albion",
              route: "albion",
            },
          ],
        },
        {
          name: "Raids légion",
          list: [
            {
              name: "Valtan",
              route: "valtan",
            },
            {
              name: "Vykas",
              route: "vykas",
            },
            {
              name: "Kakul-Saydon",
              route: "kakul",
            },
            {
              name: "Brelshaza",
              route: "brelshaza",
            },
          ],
        },
      ],
      exploration: [
        {
          name: "Améliorations",
          list: [
            {
              name: "Runes",
              route: "runes",
            },
            {
              name: "Potions de compétence",
              route: "skill-points",
            },
            {
              name: "Potions de caractéristique",
              route: "caract-potions",
            },
            {
              name: "Affinités",
              route: "affinities",
            },
            {
              name: "Réputations",
              route: "reputations",
            },
          ],
        },
        {
          name: "Collectibles",
          list: [
            {
              name: "Coeurs d’île",
              route: "islands",
            },
            {
              name: "Symboles d'ignea",
              route: "igneas",
            },
            {
              name: "Graines de Mokokos",
              route: "mokoko-seeds",
            },
            {
              name: "Etoiles d'Omnium",
              route: "omnium-stars",
            },
            {
              name: "Coeurs de géant",
              route: "giants-hearts",
            },
            {
              name: "Oeuvres d’art",
              route: "masterpieces",
            },
            {
              name: "Feuilles",
              route: "world-tree-leaves",
            },
            {
              name: "Trésors des mers",
              route: "treasure-maps",
            },
          ],
        },
      ],
      collections: [
        {
          name: "Montures",
          route: "mounts",
        },
        {
          name: "Mascottes",
          route: "pets",
        },
        {
          name: "Apparences",
          route: "skins",
        },
        {
          name: "Jouet",
          route: "toys",
        },
      ],
    };
  },
  methods: {
    changeClassType(classType, gender) {
      this.selectedClassType = classType;
      this.selectedClassGender = gender;
    },
    changeGuardianLvl(guardianLvl) {
      this.selectedGuardianLvl = guardianLvl;
    },
  },
};
</script>

<style scoped>
.elevation-card {
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.elevation-card:hover {
  cursor: pointer;
  -webkit-transform: scale(1.03, 1.03);
  transform: scale(1.03, 1.03);
}
</style>
