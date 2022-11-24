<template>
  <div class="activities">
    <div class="uk-child-width-1-6" uk-grid>
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
              Argos
              <span style="font-weight: lighter; font-size: 13px"
                >- 1370</span
              ></a
            >
          </li>

          <li @click="changeActivity('guardians')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Valtan
              <span style="font-weight: lighter; font-size: 13px">- 1420</span>
            </a>
          </li>
          <li @click="changeActivity('raids')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Vykas
              <span style="font-weight: lighter; font-size: 13px"
                >- 1445</span
              ></a
            >
          </li>
          <li @click="changeActivity('raids')">
            <a
              ><ul class="uk-dotnav">
                <li class="">
                  <a>Item 1</a>
                </li>
              </ul>
              Karul
              <span style="font-weight: lighter; font-size: 13px"
                >- 1470</span
              ></a
            >
          </li>
        </ul>
      </div>

      <!-- right part -->
      <div class="uk-width-expand right-part">
        <DungeonsCard />
      </div>
    </div>
  </div>
</template>

<script>
import DungeonsCard from "./activities/Dungeons.vue";

export default {
  components: {
    DungeonsCard,
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
