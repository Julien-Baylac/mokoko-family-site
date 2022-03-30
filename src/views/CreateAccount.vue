<template>
  <div class="login">
    <div
      class="uk-position-center uk-overlay uk-overlay-default"
      style="width: 400px"
    >
      <div class="uk-flex uk-flex-center">
        <h2>Mokoko Family</h2>
      </div>
      <div class="uk-flex uk-flex-center">
        <p>Création de compte</p>
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
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input
              class="uk-input"
              type="text"
              placeholder="Nom du personnage"
            />
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
        Créer un compte
      </button>
      <div style="margin-top: 10px" class="uk-flex uk-flex-center">
        <span><router-link to="/login">Se connecter</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
