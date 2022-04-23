<template>
  <div class="activities">
    <div class="uk-child-width-1-5" uk-grid>
      <!-- left part -->
      <div class="sidebar">
        <ul class="uk-tab-left tabs" style="margin-left: 50px" uk-tab>
          <li class="first-tab" @click="changeActivity('dungeons')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Donjons</a
            >
          </li>

          <li @click="changeActivity('guardians')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Gardiens
            </a>
          </li>
          <li @click="changeActivity('raids')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Raids</a
            >
          </li>
        </ul>
      </div>

      <!-- right part -->
      <div class="uk-width-expand right-part">
        <Dungeons v-if="activity === 'dungeons'" />
        <Raids v-if="activity === 'raids'" />
        <Guardians v-if="activity === 'guardians'" />
        <Events v-if="activity === 'events'" />
      </div>
    </div>
  </div>
</template>

<script>
import Dungeons from "./activities/Dungeons.vue";
import Raids from "./activities/Raids.vue";
import Guardians from "./activities/Guardians.vue";
import Events from "./activities/Events.vue";

export default {
  components: {
    Dungeons,
    Raids,
    Guardians,
    Events,
  },
  data() {
    return {
      activity: "dungeons",
    };
  },
  methods: {
    changeActivity(activity) {
      this.activity = activity;
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
