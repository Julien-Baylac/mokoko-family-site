<template>
  <div class="activities">
    <div class="uk-child-width-1-5" uk-grid>
      <!-- left part -->
      <div class="sidebar">
        <ul class="uk-tab-left tabs" style="margin-left: 50px" uk-tab>
          <li class="first-tab" @click="changeActivity('players')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Les joueurs</a
            >
          </li>

          <li @click="changeActivity('ranking')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Classements
            </a>
          </li>
          <li @click="changeActivity('stats')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Statistiques</a
            >
          </li>
          <li @click="changeActivity('gallery')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Galerie</a
            >
          </li>
        </ul>
      </div>

      <!-- right part -->
      <div class="uk-width-expand right-part">
        <Players v-if="section === 'players'" />
        <Statistics v-if="section === 'stats'" />
        <Ranking v-if="section === 'ranking'" />
        <Gallery v-if="section === 'gallery'" />
      </div>
    </div>
  </div>
</template>

<script>
import Players from "./community/Players.vue";
import Statistics from "./community/Statistics.vue";
import Ranking from "./community/Ranking.vue";
import Gallery from "./community/Gallery.vue";

export default {
  components: {
    Players,
    Statistics,
    Ranking,
    Gallery,
  },
  data() {
    return {
      section: "players",
    };
  },
  methods: {
    changeActivity(section) {
      this.section = section;
    },
  },
};
</script>

<style lang="scss" scoped>
.activities {
  .sidebar {
    height: calc(100vh - 80px);
    .tabs {
      height: 100%;
      .first-tab {
        margin-top: 32vh;
      }
    }
  }
  .right-part {
    height: calc(100vh - 80px);
    overflow: scroll;
  }
  .uk-grid {
    padding-left: 0 !important;
    margin-left: 0 !important;
  }
  .uk-dotnav {
    margin-right: 10px;
  }
}
</style>
