<template>
  <div id="app" v-bind:class="{ 'uk-background-secondary': darkMode }">
    <nav
      class="uk-navbar-container"
      v-bind:class="{ 'uk-light': darkMode }"
      style="background-color: black"
      v-bind:style="{ backgroundColor: darkMode ? '#121212' : '#ececec' }"
      uk-navbar
    >
      <div class="nav-overlay uk-navbar-left">
        <ul class="uk-navbar-nav">
          <a
            class="uk-navbar-item uk-logo"
            href="#"
            style="margin-right: 40px; margin-left: 20px; color: #85ea85"
            >Mokoko Family</a
          >
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/activities">Activités</router-link>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-nav-header">Permanents</li>
                <li>
                  <router-link to="/activities">Donjons</router-link>
                </li>
                <li>
                  <router-link to="/activities">Raids</router-link>
                </li>
                <li>
                  <router-link to="/activities">Gardiens</router-link>
                </li>
                <li class="uk-nav-header">Temporaires</li>
                <li>
                  <router-link to="/activities">Events</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/ranking">Classements</router-link>
          </li>
          <ul class="uk-navbar-nav">
            <li>
              <a href="#">Collections</a>
              <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                <div
                  class="uk-navbar-dropdown-grid uk-child-width-1-2"
                  style="padding-left: 0"
                  uk-grid
                >
                  <div>
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li class="uk-nav-header">Exploration</li>

                      <li>
                        <router-link to="/affinities">Affinités</router-link>
                      </li>
                      <li>
                        <router-link to="/islands">Âmes insulaires</router-link>
                      </li>
                      <li>
                        <router-link to="/giants-hearts"
                          >Coeurs de géants</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/omnium-stars"
                          >Étoiles d'Omnium</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/master-pieces"
                          >Oeuvres d'art</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/mokoko-seeds"
                          >Graines de Mokoko</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/igneas">Igneas</router-link>
                      </li>
                      <li>
                        <router-link to="/world-tree-leaves"
                          >Feuilles de l'Arbre-Monde</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/treasure-maps"
                          >Trésors des mers</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li class="uk-nav-header">Collections</li>

                      <li><router-link to="/skins">Skins</router-link></li>
                      <li>
                        <router-link to="/pets">Familiers</router-link>
                      </li>
                      <li class="uk-nav-header">Marchands itinérants</li>
                      <li>
                        <router-link to="/timeline"
                          ><span>Les objets</span></router-link
                        >
                      </li>
                      <li>
                        <router-link to="/timeline"
                          ><span>Timeline</span></router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </div>

      <div
        class="nav-overlay uk-navbar-right"
        v-bind:class="{ 'uk-light': darkMode }"
      >
        <ul class="uk-navbar-nav" style="margin-right: 40px">
          <!-- socials -->
          <li>
            <router-link to="/login"
              ><span uk-icon="icon: discord"></span
            ></router-link>
          </li>
          <li>
            <router-link to="/login"
              ><span uk-icon="icon: twitch"></span
            ></router-link>
          </li>
          <li>
            <router-link to="/login"
              ><span uk-icon="icon: instagram"></span
            ></router-link>
          </li>
          <li>
            <router-link to="/login"
              ><span uk-icon="icon: twitter"></span
            ></router-link>
          </li>
        </ul>
        <span class="uk-margin-medium-right">
          <div
            class="uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle"
            v-bind:style="{
              backgroundImage:
                'url(' + require(`@/assets/img/profile/selfi.jpg`) + ')',
            }"
            style="height: 30px; width: 30px; border-radius: 30px"
          ></div>
          <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">
              <li class="uk-nav-header">Parametres</li>
              <li>
                <a @click="switchTheme"
                  ><font-awesome-icon
                    icon="fa-solid fa-circle-half-stroke"
                    style="margin-right: 3px"
                  />{{ darkMode ? "Désactiver" : "Activer" }}
                  <span> dark mode</span>
                </a>
              </li>
              <li>
                <router-link to="/profile"
                  ><span
                    ><font-awesome-icon
                      icon="fa-solid fa-user"
                      style="margin-right: 8px"
                    />Mon profil</span
                  ></router-link
                >
              </li>
              <li class="uk-nav-divider uk-margin-top"></li>
              <li style="display: flex; justify-content: center">
                <button
                  class="uk-button uk-button-secondary uk-button-small disconnect-button"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right-from-bracket"
                  />
                  <span style="margin-left: 7px">Déconnexion</span>
                </button>
              </li>
            </ul>
          </div>
        </span>
      </div>
    </nav>
    <div class="">
      <router-view v-bind:class="{ 'uk-light': darkMode }" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      currentTheme: "1",
    };
  },
  mounted() {
    if (localStorage.getItem("dark-mode")) {
      this.currentTheme = localStorage.getItem("dark-mode");
    } else {
      localStorage.setItem("dark-mode", this.currentTheme);
    }
  },
  computed: {
    darkMode() {
      if (this.currentTheme === "0") {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    switchTheme() {
      localStorage.setItem("dark-mode", this.currentTheme === "0" ? "1" : "0");
      this.currentTheme = localStorage.getItem("dark-mode");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.uk-navbar-dropdown {
  margin-top: 0 !important;
  background: #f8f8f8;
  box-shadow: none;
}
.uk-dropdown {
  background: #f8f8f8;
  box-shadow: none;
}
.uk-button {
  text-transform: none;
}
.uk-navbar-dropdown-grid {
  margin-left: 0;
}
.disconnect-button {
  margin-top: 17px;
}
</style>
