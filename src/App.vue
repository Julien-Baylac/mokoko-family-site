<template>
  <div id="app">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <a
            class="uk-navbar-item uk-logo"
            href="#"
            style="margin-right: 40px; margin-left: 20px"
            >Mokoko Family</a
          >
          <li>
            <a><router-link to="/">Home</router-link></a>
          </li>
          <li>
            <a><router-link to="/direct">Direct</router-link></a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav" style="margin-right: 40px">
          <li>
            <a><router-link to="/activities">Activités</router-link></a>
          </li>
          <li>
            <a
              ><router-link to="/recherche-groupe"
                >Recherche de groupe</router-link
              ></a
            >
          </li>
          <li>
            <a href="#">Collections</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a
                    ><router-link to="/reputations">Réputations</router-link></a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Le marché</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li>
                  <a><router-link to="/skins">Skins</router-link></a>
                </li>
                <li>
                  <a><router-link to="/pets">Familiers</router-link></a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a><router-link to="/profile">Profil</router-link></a>
          </li>
          <li>
            <a><router-link to="/login">Login</router-link></a>
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
</style>
