<template>
  <div class="activities-presention">
    <div class="uk-child-width-1-2" uk-grid>
      <div style="padding: 50px">
        <div
          class="uk-height-medium uk-background-cover uk-light uk-flex"
          style="border-radius: 10px"
          :style="{
            'background-image':
              'url(' + require('@/assets/img/home/exploration.jpeg') + ')',
          }"
        ></div>
      </div>
      <div style="display: flex; align-items: center">
        <div class="uk-text-left">
          <h3>Valider chacun de vos succés</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <a
              class="uk-button uk-button-text"
              style="margin-right: 20px"
              href="#"
              >Voir la liste des collectibles</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
