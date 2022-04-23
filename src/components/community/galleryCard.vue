<template>
  <div
    style="display: flex; justify-content: center; margin-top: 20px"
    class="uk-transition-toggle"
  >
    <div
      class="uk-flex uk-flex-center uk-flex-bottom uk-background-cover uk-light uk-transition-scale-up uk-transition-opaque"
      style="border-radius: 10px; width: 90%; cursor: pointer"
      :data-src="require(`@/assets/img/community/gallery/${imgUrl}`)"
      :class="`uk-height-${height}`"
      uk-img
    >
      <span
        style="
          background-color: rgb(0 0 0 / 60%);
          padding: 2px 8px 2px 8px;
          border-radius: 3px;
          margin-bottom: 5px;
        "
        >{{ name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery-card",
  props: {
    imgUrl: String,
    name: String,
    description: String,
    height: {
      type: String,
      default: "medium",
    },
  },
};
</script>

<style></style>
