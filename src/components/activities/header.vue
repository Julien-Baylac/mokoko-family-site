<template>
  <div>
    <div
      style="
        background-color: #000000;
        width: 100%;
        height: 357px;
        display: flex;
        justify-content: space-between;
      "
    >
      <div
        style="
          background: linear-gradient(to right, black 90%, transparent);
          width: 100%;
          margin-left: 70px;
          z-index: 2;
        "
      ></div>
      <video
        :src="require(`@/assets/videos/kakul.mp4`)"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
        style="z-index: 1"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "explorations-header",
  props: {
    wallpaper: String,
    title: String,
    subtitle: String,
    description: String,
  },
};
</script>

<style></style>
