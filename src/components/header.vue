<template>
  <div
    class="header"
    v-bind:class="{ 'image-light': isDay, 'image-dark': !isDay }"
  >
    <div
      class="uk-position-top-right"
      style="margin-top: 120px; margin-right: 40px"
    >
      <div
        style="
          background-color: rgba(0, 0, 0, 0.4);
          padding: 15px;
          border-radius: 4px;
        "
      >
        <span>Marchands Itinérants</span>
        <div style="margin-top: 15px" class="uk-text-left">
          <div style="color: #7dbaff">
            <span uk-icon="copy" style="margin-right: 10px"></span
            ><span>Séria </span
            ><span>{{ getTime("2022-04-20T11:11:57.056-07:00") }}</span>
          </div>
          <div class="uk-text-center">
            <span uk-icon="minus"></span>
          </div>
          <div style="color: #deab60">
            <span uk-icon="copy" style="margin-right: 10px"></span
            ><span>Mei </span
            ><span>{{ getTime("2022-04-20T11:11:57.056-07:00") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-position-top-left"
      style="margin-top: 120px; margin-left: 40px"
    >
      <div
        style="
          background-color: rgba(0, 0, 0, 0.4);
          padding: 15px;
          border-radius: 4px;
        "
      >
        <span>Est des Etats-unis : {{ substractTime(4) }} </span><br />
        <span>Ouest des Etats-unis : {{ substractTime(7) }} </span><br />
        <span>Europe centrale : {{ addTime(1) }} </span><br />
        <span>Europe occidentale : {{ addTime() }} </span><br />
        <span>Amérique du Sud : {{ addTime(3) }} </span>
      </div>
      <div
        style="
          background-color: rgba(0, 0, 0, 0.4);
          padding: 15px;
          border-radius: 4px;
          margin-top: 10px;
        "
      >
        <span style="display: flex; align-items: center"
          >Zinnervale :
          <div
            style="
              height: 10px;
              width: 10px;
              background-color: green;
              border-radius: 20px;
              margin-left: 10px;
              margin-right: 7px;
            "
          ></div>
          En ligne
        </span>
      </div>
      <div
        style="
          background-color: rgba(0, 0, 0, 0.4);
          padding: 15px;
          border-radius: 4px;
          margin-top: 10px;
        "
      >
        <span style="display: flex; align-items: center; margin-bottom: 20px"
          >Reset du serveur - Europe occidentale
        </span>
        <div style="display: flex; justify-content: center">
          <div
            class="uk-grid-small uk-child-width-auto"
            uk-grid
            uk-countdown="date: 2022-04-27T08:23:45+00:00"
          >
            <div>
              <div class="uk-countdown-number uk-countdown-hours"></div>
              <div
                class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
              >
                Heures
              </div>
            </div>
            <div class="uk-countdown-separator">:</div>
            <div>
              <div class="uk-countdown-number uk-countdown-minutes"></div>
              <div
                class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
              >
                Minutes
              </div>
            </div>
            <div class="uk-countdown-separator">:</div>
            <div>
              <div class="uk-countdown-number uk-countdown-seconds"></div>
              <div
                class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s"
              >
                Secondes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-position-bottom" style="margin-bottom: 80px">
      <div>
        <div style="display: flex; justify-content: center">
          <img
            :src="require(`@/assets/img/logo/logo-grey.png`)"
            style="
              border-radius: 30px;
              width: 60px;
              height: 60px;
              margin-bottom: 10px;
              border: 1px grey solid;
            "
          />
        </div>

        <div style="display: flex; justify-content: center">
          <span style="font-size: 25px"> Mokoko Family </span>
        </div>
        <div style="display: flex; justify-content: center">
          <span style="font-size: 13px"
            >Communauté Francophone de Lost Ark</span
          >
        </div>
        <div style="display: flex; justify-content: center; margin-top: 10px">
          <span style="font-size: 13px">Beta-0.0.1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "header-home",
  data() {
    return {
      time: moment(),
    };
  },
  props: {
    msg: String,
  },
  components: {},
  beforeMount() {
    setInterval(() => {
      this.time = moment();
    }, 1000);
  },
  computed: {
    isDay() {
      var currentHour = this.time.format("HH");
      if (currentHour >= 9 && currentHour < 21) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    addTime(hours) {
      return this.time.locale("fr").add(hours, "h").format("LT");
    },
    substractTime(hours) {
      return this.time.locale("fr").subtract(hours, "h").format("LT");
    },
    getTime(date) {
      if (date !== null) {
        return moment(date).lang("fr").from(this.time);
      } else {
        return "Disponible";
      }
    },
  },
};
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
.header {
  height: calc(100vh - 80px);
  background-color: rgb(42, 82, 82);
}
.uk-countdown-number {
  font-size: 3rem;
}
.uk-countdown-separator {
  font-size: 2rem;
}
.uk-countdown-label {
  font-size: 0.7rem !important;
}
</style>
