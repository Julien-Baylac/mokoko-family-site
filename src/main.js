import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import VueTimeline from "@growthbunker/vuetimeline";

/* import the fontawesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleHalfStroke,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCircleHalfStroke, faArrowRightFromBracket, faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueLodash, { name: "custom", lodash: lodash });
Vue.use(VueTimeline);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
