<template>
  <div id="app">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="nav-overlay uk-navbar-left">
        <ul class="uk-navbar-nav">
          <a
            class="uk-navbar-item uk-logo"
            href="#"
            style="margin-right: 40px; margin-left: 20px"
            >Mokoko Family</a
          >
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/activities">Activités</router-link>
          </li>
          <li>
            <router-link to="/ranking">Classements</router-link>
          </li>
          <li>
            <a href="#">Collections</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-nav-header">Exploration</li>

                <li>
                  <router-link to="/affinities">Affinités</router-link>
                </li>
                <li class="uk-nav-header">Collections</li>

                <li><router-link to="/skins">Skins</router-link></li>
                <li>
                  <router-link to="/pets">Familiers</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link to="/profile"><span>Mon profil</span></router-link>
          </li>
        </ul>
      </div>

      <div class="nav-overlay uk-navbar-right">
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
      </div>
    </nav>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

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
</style>
