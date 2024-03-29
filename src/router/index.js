import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Direct from "../views/Direct.vue";
import Ranking from "../views/community/Ranking.vue";
import Skins from "../views/collections/Skins.vue";
import Pets from "../views/collections/Pets.vue";
import Mounts from "../views/collections/Mounts.vue";
import WanderingMerchant from "../views/collections/WanderingMerchant.vue";
import Activities from "../views/Activities.vue";
import Islands from "../views/exploration/Islands.vue";
import GiantsHearts from "../views/exploration/GiantsHearts.vue";
import OmniumStars from "../views/exploration/OmniumStars.vue";
import MasterPieces from "../views/exploration/MasterPieces.vue";
import MokokoSeeds from "../views/exploration/MokokoSeeds.vue";
import WorldTreeLeaves from "../views/exploration/WorldTreeLeaves.vue";
import Igneas from "../views/exploration/Igneas.vue";
import TreasureMaps from "../views/exploration/TreasureMaps.vue";
import Affinities from "../views/exploration/Affinities.vue";
import Community from "../views/Community.vue";
import Profile from "../views/Profile.vue";
import Shop from "../views/Shop.vue";
import Playlist from "../views/Playlist.vue";
import Contact from "../views/Contact.vue";

// guides
import Guides from "../views/Guides.vue";
import Argos from "../views/guides/Argos.vue";

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
  {
    path: "/community",
    name: "Community",
    component: Community,
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
  {
    path: "/giants-hearts",
    name: "GiantsHearts",
    component: GiantsHearts,
  },
  {
    path: "/omnium-stars",
    name: "OmniumStars",
    component: OmniumStars,
  },
  {
    path: "/master-pieces",
    name: "MasterPieces",
    component: MasterPieces,
  },
  {
    path: "/mokoko-seeds",
    name: "MokokoSeeds",
    component: MokokoSeeds,
  },
  {
    path: "/world-tree-leaves",
    name: "WorldTreeLeaves",
    component: WorldTreeLeaves,
  },
  {
    path: "/igneas",
    name: "Igneas",
    component: Igneas,
  },
  {
    path: "/treasure-maps",
    name: "TreasureMaps",
    component: TreasureMaps,
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
  {
    path: "/mounts",
    name: "Mounts",
    component: Mounts,
  },
  {
    path: "/wandering-merchant",
    name: "WanderingMerchant",
    component: WanderingMerchant,
  },
  //profile
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  //shop
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  //guides
  {
    path: "/guides",
    name: "Guides",
    component: Guides,
  },
  //playlist
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist,
  },
  //contact
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  //Guides
  {
    path: "/argos",
    name: "Argos",
    component: Argos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
