<template>
  <div class="home">
    <Header></Header>
    <div
      class="uk-container uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex"
      :style="require(`@/assets/img/home/yorn.jpeg`)"
    >
      <div
        class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
      >
        <h2 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">
          Completez vos collections
        </h2>
        <div
          uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;"
        >
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
    <!-- deuxieme div -->
    <div class="uk-container">
      <h2>Rejoindre la Mokokok Family</h2>
      <div>Rejoignez nous sur les réseaux sociaux.</div>
      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <div style="padding: 10px; border: 1px solid grey; border-radius: 5px">
          <img :src="require(`@/assets/img/socials/discord.png`)" />
        </div>
        <div style="padding: 10px; border: 1px solid grey; border-radius: 5px">
          <img :src="require(`@/assets/img/socials/youtube.png`)" />
        </div>
        <div style="padding: 10px; border: 1px solid grey; border-radius: 5px">
          <img :src="require(`@/assets/img/socials/instagram.png`)" />
        </div>
        <div style="padding: 10px; border: 1px solid grey; border-radius: 5px">
          <img :src="require(`@/assets/img/socials/twitter.png`)" />
        </div>
      </div>
    </div>

    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/header.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>
