import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Direct from "../views/Direct.vue";
import Ranking from "../views/Ranking.vue";
import Skins from "../views/Skins.vue";
import Pets from "../views/Pets.vue";
import Activities from "../views/Activities.vue";
import Islands from "../views/exploration/Islands.vue";
import Affinities from "../views/exploration/Affinities.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  //base
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/direct",
    name: "Direct",
    component: Direct,
  },
  //activities
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: Ranking,
  },
  //exploration
  {
    path: "/affinities",
    name: "Affinities",
    component: Affinities,
  },
  {
    path: "/islands",
    name: "Islands",
    component: Islands,
  },
  //collection
  {
    path: "/pets",
    name: "Pets",
    component: Pets,
  },
  {
    path: "/skins",
    name: "Skins",
    component: Skins,
  },
  //profile
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
