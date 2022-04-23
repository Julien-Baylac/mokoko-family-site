<template>
  <div class="gallery">
    <Header
      wallpaper="gallery_wallpaper"
      title="Galerie"
      subtitle="Les joueurs de la communauté"
      :description="`Faites une recherche en cliquant sur l'image ou recherchez directement via le filtre au dessus du tableau`"
    ></Header>
    <div class="uk-container">
      <div uk-filter="target: .js-filter" style="margin-top: 40px">
        <ul class="uk-subnav uk-subnav-pill">
          <li class="uk-active" uk-filter-control><a href="#">Tout</a></li>
          <li uk-filter-control="[data-class='screen-shots']">
            <a>Capture d'écran</a>
          </li>
          <li uk-filter-control="[data-class='graphisms']">
            <a>Graphisme</a>
          </li>
        </ul>

        <ul class="js-filter uk-child-width-1-4" uk-grid="masonry: true">
          <li
            v-for="image in gallery"
            v-bind:key="image.id"
            :data-class="image.type"
            href="#modal-media-image"
            @click="changeImage(image)"
            uk-toggle
          >
            <GalleryCard
              :name="image.name"
              :imgUrl="image.imgUrl"
              :description="image.description"
              :height="image.height"
            ></GalleryCard>
          </li>
        </ul>
      </div>

      <!-- modal -->
      <div id="modal-media-image" class="uk-flex-top" uk-modal>
        <div
          class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical"
          style="border-radius: 10px; background-color: transparent"
        >
          <button
            class="uk-modal-close-outside"
            type="button"
            uk-close
          ></button>
          <img
            v-if="modalSrc.imgUrl"
            :src="require(`@/assets/img/community/gallery/${modalSrc.imgUrl}`)"
            style="
              border-radius: 10px;
              background-color: transparent;
              max-height: 80vh;
            "
          />
          <div class="uk-overlay uk-light uk-position-bottom">
            <span
              style="
                background-color: rgb(0 0 0 / 60%);
                padding: 2px 8px 2px 8px;
                border-radius: 3px;
                margin-right: 10px;
                font-weight: Bold;
              "
            >
              {{ modalSrc.name }} </span
            ><br />
            <span
              v-if="modalSrc.description"
              style="
                background-color: rgb(0 0 0 / 60%);
                padding: 2px 8px 2px 8px;
                border-radius: 3px;
                margin-bottom: 5px;
                margin-top: 5px;
              "
            >
              {{ modalSrc.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/community/header.vue";
import GalleryCard from "@/components/community/galleryCard.vue";

export default {
  name: "players",
  components: { Footer, Header, GalleryCard },
  data() {
    return {
      modalSrc: {
        name: "Chargement...",
        description: "Chargement...",
        imgUrl: "",
      },
      gallery: [
        {
          id: 1,
          name: "Oow",
          imgUrl: "oow2.jpg",
          description: "Mon perso sur la RU <3 <3",
          height: "small",
          type: "screen-shots",
        },
        {
          id: 2,
          name: "Lynx",
          imgUrl: "lynx.png",
          description: "petit capuchon rouge <3",
          height: "large",
          type: "screen-shots",
        },
        {
          id: 3,
          name: "Oow",
          imgUrl: "oow1.jpg",
          description: "",
          height: "small",
          type: "screen-shots",
        },
        {
          id: 4,
          name: "Ritalinho",
          imgUrl: "purple.jpg",
          description: "",
          height: "small",
          type: "screen-shots",
        },
        {
          id: 6,
          name: "Kurumi",
          imgUrl: "kurumy.jpg",
          description: "avec ma cousine",
          height: "medium",
          type: "screen-shots",
        },
        {
          id: 5,
          name: "Ritalinho",
          imgUrl: "purple1.jpg",
          description: "",
          height: "small",
          type: "screen-shots",
        },
        {
          id: 7,
          name: "ErChouSing",
          imgUrl: "yellow.jpg",
          description: "New skin barde a Faiton <3",
          height: "medium",
          type: "screen-shots",
        },
        {
          id: 8,
          name: "Ritalinho",
          imgUrl: "red2.jpg",
          description: "",
          height: "medium",
          type: "screen-shots",
        },
        {
          id: 9,
          name: "Ritalinho",
          imgUrl: "red.jpg",
          description: "",
          height: "small",
          type: "screen-shots",
        },
        {
          id: 10,
          name: "Korosé",
          imgUrl: "cat.jpg",
          description: "",
          height: "small",
          type: "screen-shots",
        },
        {
          id: 11,
          name: "Korosé",
          imgUrl: "cat2.jpg",
          description: "",
          height: "medium",
          type: "screen-shots",
        },
        {
          id: 12,
          name: "Oow",
          imgUrl: "Emote hype grand.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 13,
          name: "Oow",
          imgUrl: "Emote angry grand.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 14,
          name: "Oow",
          imgUrl: "Emote love grand.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 15,
          name: "Oow",
          imgUrl: "Emote Sad grand.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 15,
          name: "Oow",
          imgUrl: "insta mokoko.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 16,
          name: "Oow",
          imgUrl: "discord mokoko.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 17,
          name: "Oow",
          imgUrl: "twiter mokoko.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 18,
          name: "Oow",
          imgUrl: "youtube mokoko t.png",
          description:
            "Propriété de la Mokoko Family : Contactez moi pour demander une autorisation d'utilisation",
          height: "small",
          type: "graphisms",
        },
        {
          id: 19,
          name: "Oow",
          imgUrl: "allteam.jpg",
          description: "Vers la mer indolente !",
          height: "small",
          type: "screen-shots",
        },
      ],
    };
  },
  methods: {
    changeImage(Object) {
      this.modalSrc = Object;
    },
  },
};
</script>

<style></style>
