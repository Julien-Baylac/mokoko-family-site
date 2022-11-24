<template>
  <div class="argos">
    <div
      class="uk-height-medium uk-background-cover uk-light"
      :data-src="require(`@/assets/img/raids/argos.jpeg`)"
      style="display: flex; align-items: center; width: 100%"
      uk-img
    >
      <div style="width: 100%">
        <div style="background-color: rgb(0 0 0 / 60%)">
          <div class="uk-container">
            <h3
              class="uk-article-title"
              style="margin-top: 10px; margin-bottom: 10px"
            >
              Argos
            </h3>
            <div class="uk-flex uk-flex-between">
              <div style="margin-top: 20px">
                <dl class="uk-description-list">
                  <dt>Raid Abyssal</dt>
                  <dd>Tier 1</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-container">
      <!-- phase 1 -->
      <div style="display: flex; margin-top: 80px" class="uk-child-width-1-2">
        <div
          class="elevation uk-background-cover"
          style="height: 330px; border-radius: 8px"
          @click="
            goTo(
              'https://www.youtube.com/watch?v=eF0RsKebHZU&ab_channel=SenseiLeKam'
            )
          "
          data-src="https://i.ytimg.com/vi/eF0RsKebHZU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzwMTaSAMdyAaZl21Zdjzl-KN4eQ"
          uk-img
        ></div>
        <div>
          <div
            class="uk-text-left"
            style="margin-top: 15px; padding-left: 25px; padding-right: 20px"
          >
            <div style="margin-bottom: 20px; font-size: 25px">Phase 1</div>
            En <span style="font-weight: bold">Phase 1</span>, vous devrez faire
            attention à la lune et au soleil, et très attention aux pizzas au
            sol !
          </div>
        </div>
      </div>

      <hr
        class="uk-divider-icon"
        style="margin-top: 50px; margin-bottom: 50px"
      />

      <!-- phase 2 -->
      <div style="display: flex; margin-top: 20px" class="uk-child-width-1-2">
        <div>
          <div
            class="uk-text-right"
            style="margin-top: 15px; padding-left: 25px; padding-right: 20px"
          >
            <div style="margin-bottom: 20px; font-size: 25px">Phase 2</div>
            En <span style="font-weight: bold">Phase 1</span>, vous devrez faire
            attention à la lune et au soleil, et très attention aux pizzas au
            sol !
            <div>
              <a
                class="uk-button uk-button-text uk-text-center"
                style="margin-top: 20px"
                href="https://www.twitch.tv/mokokofamily"
                target="_blank"
                >Voir la video</a
              >
            </div>
          </div>
        </div>
        <div style="margin-left: 40px">
          <iframe
            width="560"
            height="315"
            class="elevation"
            @click="
              goTo(
                'https://www.youtube.com/watch?v=eF0RsKebHZU&ab_channel=SenseiLeKam'
              )
            "
            style="border-radius: 7px"
            src="https://www.youtube.com/embed/-m0Os8agxzk?controls=0&showinfos=0"
            frameborder="0"
            allow="autoplay;"
          ></iframe>
        </div>
      </div>

      <hr
        class="uk-divider-icon"
        style="margin-top: 50px; margin-bottom: 50px"
      />

      <!-- phase 3 -->
      <div style="margin-bottom: 80px">
        <div>
          <div
            class="uk-text-center"
            style="margin-top: 45px; padding-left: 25px; padding-right: 20px"
          >
            <div style="margin-bottom: 20px; font-size: 25px">Phase 3</div>
            En <span style="font-weight: bold">Phase 1</span>, vous devrez faire
            attention à la lune et au soleil, et très attention aux pizzas au
            sol !
            <div>
              <a
                class="uk-button uk-button-text uk-text-center"
                style="margin-top: 20px"
                href="https://www.twitch.tv/mokokofamily"
                target="_blank"
                >Voir la video</a
              >
            </div>
          </div>
        </div>
        <div style="margin-top: 30px">
          <iframe
            width="100%"
            height="415"
            class="elevation"
            style="border-radius: 7px"
            src="https://www.youtube.com/embed/nSQp35K7oVE"
            frameborder="0"
            allow="accelerometer; autoplay;"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Guides",
  components: {
    Footer,
  },
  methods: {
    goTo(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.elevation {
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.elevation:hover {
  cursor: pointer;
  -webkit-transform: scale(1.03, 1.03);
  transform: scale(1.03, 1.03);
}
</style>
