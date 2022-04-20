<template>
  <div class="home">
    <Header></Header>
    <div
      class="uk-container uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex"
      :style="require(`@/assets/img/home/yorn.jpeg`)"
    >
      <div
        class="uk-width-1-2 uk-text-center uk-margin-auto uk-margin-auto-vertical"
      >
        <h2>Completez vos collections</h2>
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
    <!-- deuxieme div -->
    <div class="uk-container">
      <div
        style="
          display: flex;
          justify-content: flex-end;
          margin-top: 50px;
          margin-bottom: 40px;
        "
        class="uk-child-width-1-2"
      >
        <div style="position: relative; left: 100px">
          <img
            class="uk-transition-scale-up uk-transition-opaque"
            :src="require(`@/assets/img/socials/cadre-webcam.png`)"
            style="
              position: absolute;
              width: 480px;
              height: 200px:
              position: absolute;
              z-index: 1;
              margin-top: -39px;
              margin-left: -20px;
              user-select: none;
            "
          />
          <video
            src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
            style="position: absolute; border-radius: 20px; width: 400px"
            uk-video="autoplay: inview"
            loop
            muted
            playsinline
          ></video>
        </div>
        <div>
          <div class="uk-text-center" style="margin-top: 10px">
            <div style="margin-bottom: 10px">
              <span
                uk-icon="icon: twitch;ratio: 3.5"
                style="font-size: 50px"
              ></span>
            </div>
            Retrouver nous sur Twitch, les matins pour suivre le développement
            des outils avec <span style="font-weight: bold">Oow</span>, et en
            soirée pour du gameplay frénétique avec
            <span style="font-weight: bold">AimzLoaded</span>.
            <div
              class="uk-grid-small uk-child-width-auto"
              style="margin-top: 20px; display: flex; justify-content: center"
              uk-grid
            >
              <div>
                <a
                  class="uk-button uk-button-text uk-text-center"
                  style="margin-right: 20px"
                  href="https://www.twitch.tv/mokokofamily"
                  target="_blank"
                  >Venir nous voir sur twitch</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="uk-child-width-expand@s uk-text-center" uk-grid>
        <a
          class="uk-inline-clip uk-transition-toggle"
          tabindex="0"
          style="padding: 30px"
          href="https://www.instagram.com/mokoko.family"
          target="_blank"
        >
          <img
            class="uk-transition-scale-up uk-transition-opaque"
            :src="require(`@/assets/img/socials/discord.png`)"
            style="user-select: none"
            width="1800"
            height="1200"
            alt=""
          />
        </a>
        <a
          class="uk-inline-clip uk-transition-toggle"
          tabindex="0"
          style="padding: 30px"
          href="https://www.instagram.com/mokoko.family"
          target="_blank"
        >
          <img
            class="uk-transition-scale-up uk-transition-opaque"
            :src="require(`@/assets/img/socials/instagram.png`)"
            style="user-select: none"
            width="1800"
            height="1200"
            alt=""
          />
        </a>
        <a
          class="uk-inline-clip uk-transition-toggle"
          tabindex="0"
          style="padding: 30px"
          href="https://www.instagram.com/mokoko.family"
          target="_blank"
        >
          <img
            class="uk-transition-scale-up uk-transition-opaque"
            :src="require(`@/assets/img/socials/twitter.png`)"
            style="user-select: none"
            width="1800"
            height="1200"
            alt=""
          />
        </a>
      </div>
    </div>

    <Footer style="margin-top: 50px" />
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
