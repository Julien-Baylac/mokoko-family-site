<template>
  <div class="login">
    <div
      class="uk-position-center uk-overlay uk-overlay-default"
      style="width: 400px; border-radius: 6px; background-color: #121212"
    >
      <div class="uk-flex uk-flex-center">
        <div>
          <div style="display: flex; justify-content: center">
            <span style="font-size: 25px; font-weight: bold"
              >SENSEI LE KAM</span
            >
          </div>
          <div style="display: flex; justify-content: center">
            <span style="font-size: 13px"
              >Communauté Francophone de Lost Ark</span
            >
          </div>
        </div>
      </div>
      <div class="uk-flex uk-flex-center" style="margin-top: 20px">
        <p>Connexion</p>
      </div>
      <form>
        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text" placeholder="Nom de compte" />
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span
              class="uk-form-icon uk-form-icon-flip"
              uk-icon="icon: lock"
            ></span>
            <input class="uk-input" type="text" placeholder="Mot de passe" />
          </div>
        </div>
      </form>
      <button class="uk-button uk-button-secondary uk-width-1-1">
        Se connecter
      </button>
      <div style="margin-top: 10px" class="uk-flex uk-flex-center">
        <span
          ><router-link to="/create-account">Créer un compte</router-link></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  height: calc(100vh - 80px);
  background-color: #404040;
}
</style>
