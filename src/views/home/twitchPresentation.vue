<template>
  <div class="twitch-presentation">
    <div class="uk-container">
      <div
        style="display: flex; justify-content: flex-end; margin-top: 80px"
        class="uk-child-width-1-2"
      >
        <div style="position: relative; left: 100px">
          <!-- <img
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
          /> -->
          <video
            src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
            style="position: absolute; border-radius: 8px; width: 450px"
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
                  >Nous rejoindre sur twitch</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="uk-child-width-expand@s uk-text-center"
        style="margin-top: 70px"
        uk-grid
      >
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
