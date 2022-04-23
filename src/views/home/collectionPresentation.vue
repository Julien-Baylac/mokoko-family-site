<template>
  <div class="collection-presentation" style="background-color: #323232">
    <div
      class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex"
    >
      <div
        class="uk-width-1-2 uk-text-center uk-margin-auto uk-margin-auto-vertical uk-container"
      >
        <div style="display: flex; justify-content: space-between">
          <div
            class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
            style="height: 100px; width: 32%; border-radius: 7px"
            :data-src="require(`@/assets/img/home/collection-1.jpeg`)"
            uk-img
          ></div>
          <div
            class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
            style="height: 100px; width: 32%; border-radius: 7px"
            :data-src="require(`@/assets/img/home/collection-2.jpeg`)"
            uk-img
          ></div>
          <div
            class="uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
            style="height: 100px; width: 32%; border-radius: 7px"
            :data-src="require(`@/assets/img/home/collection-3.jpeg`)"
            uk-img
          ></div>
        </div>
        <h2>Gérer vos collections</h2>
        <div>
          Partez à la recherche des toutes les montures, pets et skins avec
          l'outil de collection de la Mokoko Family. Ajoutez à votre collection
          tous ceux que vous avec récupéré et retrouvez les dans votre profil.
          <div
            class="uk-grid-small uk-child-width-auto"
            style="margin-top: 20px; display: flex; justify-content: center"
            uk-grid
          >
            <div>
              <a
                class="uk-button uk-button-text"
                style="margin-right: 20px"
                href="#"
                >Apparences</a
              >
            </div>
            <div>
              <a
                class="uk-button uk-button-text"
                style="margin-right: 20px"
                href="#"
                >Montures</a
              >
            </div>
            <div>
              <a class="uk-button uk-button-text" href="#">Familiers</a>
            </div>
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
