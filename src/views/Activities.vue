<template>
  <div class="activities">
    <div class="uk-child-width-1-5" uk-grid>
      <!-- left part -->
      <div class="sidebar">
        <ul class="uk-tab-left tabs" style="margin-left: 50px" uk-tab>
          <li class="first-tab" @click="changeActivity('dungeons')">
            <a>Donjons</a>
          </li>
          <li @click="changeActivity('raids')"><a>Raids</a></li>
          <li @click="changeActivity('guardians')">
            <a
              >Gardiens
              <ul class="uk-dotnav">
                <li class="uk-active" style="margin-left: 15px">
                  <a>Item 1</a>
                </li>
                <li><a>Item 2</a></li>
              </ul></a
            >
          </li>
          <li @click="changeActivity('events')">
            <a
              >Events
              <ul class="uk-dotnav">
                <li class="uk-active" style="margin-left: 15px">
                  <a>Item 1</a>
                </li>
                <li><a>Item 2</a></li>
              </ul></a
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
  padding-left: 5%;
  padding-right: 5%;
  height: calc(100vh - 80px);
  overflow: scroll;
}
</style>
