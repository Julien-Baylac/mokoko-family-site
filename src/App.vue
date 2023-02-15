<template>
  <div
    id="app"
    v-bind:class="{
      'uk-background-secondary': darkMode,
      'dark-mode': darkMode,
    }"
  >
    <nav
      class="navbar uk-navbar-sticky"
      v-bind:class="{ 'uk-light': darkMode }"
      style="background-color: black"
      v-bind:style="{ backgroundColor: darkMode ? '#121212' : '#ececec' }"
      uk-navbar
    >
      <div class="nav-overlay uk-navbar-left">
        <ul class="uk-navbar-nav">
          <router-link
            to="/"
            class="uk-navbar-item uk-logo"
            style="margin-left: 30px"
          >
            SENSEI LE KAM
          </router-link>
          <li class="guides-button" style="margin-left: 30px">
            <router-link to="/guides"
              ><span class="navbar-text guides-text">Guides</span
              ><span class="navbar-text-jap">ガイド</span></router-link
            >
          </li>
          <li class="lfg-button">
            <router-link to="/activities"
              ><span class="navbar-text lfg-text">LFG</span
              ><span class="navbar-text-jap">グループ</span></router-link
            >
          </li>
          <li class="playlist-button">
            <router-link to="/playlist"
              ><span class="navbar-text playlist-text">Playlist</span
              ><span class="navbar-text-jap">プレイリスト</span></router-link
            >
          </li>
          <ul class="uk-navbar-nav" style="margin-right: 20px">
            <li class="shop-button">
              <router-link to="/shop"
                ><span class="navbar-text shop-text">Boutique</span
                ><span class="navbar-text-jap">お店</span></router-link
              >
            </li>
            <li class="stream-button">
              <a href="https://www.twitch.tv/senseilekam" target="blank"
                ><span class="navbar-text stream-text"
                  ><span
                    uk-icon="twitch"
                    style="margin-right: 10px; color: #64ff64"
                  ></span
                  >Direct</span
                ><span class="navbar-text-jap">ストリーム</span></a
              >
            </li>
            <li style="margin-left: 20px; width: 250px" class="commu-button">
              <router-link to="/community"
                ><span class="navbar-text commu-text"
                  >La commu' qu'on merrite</span
                ><span class="navbar-text-jap">コミュニティ</span></router-link
              >
            </li>
            <!-- <li class="contact-button">
              <router-link to="/contact"
                ><span class="contact-text">Contact</span></router-link
              >
            </li> -->
          </ul>
        </ul>
      </div>

      <div
        class="nav-overlay uk-navbar-right"
        v-bind:class="{ 'uk-light': darkMode }"
      >
        <span class="">
          <ul class="uk-navbar-nav">
            <li>
              <router-link to="/login">Se connecter</router-link>
            </li>
            <li>
              <a
                ><span
                  uk-icon="icon: user"
                  style="
                    margin-right: 30px;
                    border: 1px grey solid;
                    border-radius: 50px;
                    padding: 3px;
                  "
                ></span
              ></a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li class="uk-nav-header">Parametres</li>

                  <li>
                    <router-link to="/profile"
                      ><span> <span>Mon profil</span></span></router-link
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
                      <span style="margin-left: 7px; font-weight: lighter"
                        >Déconnexion</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
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
      location.reload();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Gill Sans", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // cursor: url(https://cdn.shopify.com/s/files/1/0611/6334/0032/files/cursor-default-gold.svg?v=1640289644),
  //   auto;
  // a {
  //   cursor: url(https://cdn.shopify.com/s/files/1/0611/6334/0032/files/cursor-pointer-blue.svg?v=1640291704),
  //     auto;
  // }
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
a.logo {
  text-decoration: none !important;
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
.uk-button,
.uk-input,
.uk-select {
  text-transform: none;
  border-radius: 3px;
}
.uk-navbar-dropdown-grid {
  margin-left: 0;
}
.uk-table-hover tbody tr:hover {
  background: #e9f7e8;
}
.uk-tab > .uk-active > a {
  color: #68d940;
  border-color: #68d940;
}
.disconnect-button {
  margin-top: 17px;
}

//Dark mode
.dark-mode {
  .uk-description-list > dt,
  .uk-nav-header,
  .uk-card-title {
    color: #fff;
  }
  .uk-card,
  .uk-dropdown,
  .uk-navbar-dropdown {
    background: #393939;
  }
}
.uk-card-primary.uk-card-body .uk-tab > .uk-active > a,
.uk-card-primary > :not([class*="uk-card-media"]) .uk-tab > .uk-active > a,
.uk-card-secondary.uk-card-body .uk-tab > .uk-active > a,
.uk-card-secondary > :not([class*="uk-card-media"]) .uk-tab > .uk-active > a,
.uk-light .uk-tab > .uk-active > a,
.uk-offcanvas-bar .uk-tab > .uk-active > a,
.uk-overlay-primary .uk-tab > .uk-active > a,
.uk-section-primary:not(.uk-preserve-color) .uk-tab > .uk-active > a,
.uk-section-secondary:not(.uk-preserve-color) .uk-tab > .uk-active > a,
.uk-tile-primary:not(.uk-preserve-color) .uk-tab > .uk-active > a,
.uk-tile-secondary:not(.uk-preserve-color) .uk-tab > .uk-active > a {
  color: #b3ff9c;
  border-color: #b3ff9c;
}
.img-profil-nav:hover {
  border: grey 1px solid;
}
.uk-table th {
  text-transform: none !important;
}
.uk-divider-vertical {
  height: 40px;
}
.navbar {
  font-weight: bold;

  .uk-navbar-nav > li > a {
    text-transform: none;
  }
  .uk-navbar-nav > li:not(.commu-button) {
    width: 130px;
  }

  .navbar-text-jap {
    font-size: 15px;
    display: none;
  }
  .shop-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
  .lfg-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
  .stream-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
  .guides-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
  .contact-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
  .playlist-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
  .commu-button:hover {
    background-image: url("https://media.giphy.com/media/vvz78PeN31QgBK22lM/giphy.gif");
    background-size: cover;
    .navbar-text {
      display: none;
    }
    .navbar-text-jap {
      display: block;
    }
  }
}
</style>
