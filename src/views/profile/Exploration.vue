<template>
  <div class="exploration">
    <ul
      class="uk-subnav uk-subnav-pill"
      uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
    >
      <li><a class="explo-switcher">Ames insulaires</a></li>
      <li><a class="explo-switcher">Coeurs de géants</a></li>
      <li><a class="explo-switcher">Etoile d'omnium</a></li>
      <li><a class="explo-switcher">Oeuvres d'art</a></li>
      <li><a class="explo-switcher">Graines de mokoko</a></li>
      <li><a class="explo-switcher">Igneas</a></li>
      <li><a class="explo-switcher">Feuilles d'arbre-monde</a></li>
      <li><a class="explo-switcher">Trésors des mers</a></li>
    </ul>

    <ul class="uk-switcher uk-margin">
      <li v-for="item in 8" v-bind:key="item">
        <div
          class="uk-inline uk-width-expand"
          style="margin-top: 50px; margin-bottom: 10px"
        >
          <a class="uk-form-icon" href="#" uk-icon="icon: search"></a>
          <input
            class="uk-input uk-form-small"
            type="text"
            placeholder="Chercher un élément"
            v-model="filter"
          />
        </div>
        <table class="uk-table uk-table-striped">
          <thead>
            <tr>
              <th>Table Heading</th>
              <th>Table Heading</th>
              <th>Table Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
            <tr>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
            <tr>
              <td>Table Data</td>
              <td>Table Data</td>
              <td>Table Data</td>
            </tr>
          </tbody>
        </table>
      </li>
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
.explo-switcher {
  text-transform: none;
  border-radius: 3px;
}
.uk-card-primary.uk-card-body .uk-subnav-pill > .uk-active > a,
.uk-card-primary
  > :not([class*="uk-card-media"])
  .uk-subnav-pill
  > .uk-active
  > a,
.uk-card-secondary.uk-card-body .uk-subnav-pill > .uk-active > a,
.uk-card-secondary
  > :not([class*="uk-card-media"])
  .uk-subnav-pill
  > .uk-active
  > a,
.uk-light .uk-subnav-pill > .uk-active > a,
.uk-offcanvas-bar .uk-subnav-pill > .uk-active > a,
.uk-overlay-primary .uk-subnav-pill > .uk-active > a,
.uk-section-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-section-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-tile-primary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a,
.uk-tile-secondary:not(.uk-preserve-color) .uk-subnav-pill > .uk-active > a {
  background-color: #81fe5a;
}
</style>
