<template>
  <div class="exploration">
    <ul
      class="uk-subnav uk-subnav-pill explo-nav"
      uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
    >
      <li><a href="#">Âmes insulaires</a></li>
      <li><a href="#">Coeurs de géants</a></li>
      <li><a href="#">Etoile d'omnium</a></li>
      <li><a href="#">Chefs-d'oeuvre</a></li>
      <li><a href="#">Graines Mokokos</a></li>
      <li><a href="#">Symboles d'igneas</a></li>
      <li><a href="#">Feuilles de l'Arbre Monde</a></li>
      <li><a href="#">Trésors des mers</a></li>
    </ul>

    <ul class="uk-switcher uk-margin">
      <li>islands</li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.explo-nav {
  a {
    font-size: 11px !important;
  }
}
</style>
