<template>
  <div class="twitch-presentation">
    <div class="uk-container">
      <div style="display: flex; margin-top: 80px" class="uk-child-width-1-2">
        <div style="margin-bottom: 40px">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/X1CrmTX6nmo?controls=0&amp;start=360;playsinline=1"
            frameborder="0"
            style="border-radius: px"
            uk-video="automute: true"
          ></iframe>
        </div>
        <div>
          <div
            class="uk-text-center"
            style="margin-top: 45px; padding-left: 25px; padding-right: 20px"
          >
            <div style="margin-bottom: 10px">
              <span
                uk-icon="icon: twitch;ratio: 3.5"
                style="font-size: 50px"
              ></span>
            </div>
            Retrouvez moi sur Twitch pour des sessions de
            <span style="font-weight: bold">Lost Ark</span>, et quelques autres
            jeux comme
            <span style="font-weight: bold">Final Fantasy XIV</span> ou
            <span style="font-weight: bold">World of warcraft</span>.
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
                  >Me rejoindre sur twitch</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="uk-divider-icon" />
      <div
        class="uk-child-width-expand@s uk-text-center"
        style="margin-top: 20px"
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
            :src="require(`@/assets/img/socials/youtube.png`)"
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
