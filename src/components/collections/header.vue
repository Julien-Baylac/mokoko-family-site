<template>
  <div
    class="uk-height-medium uk-background-cover uk-light"
    :data-src="require(`@/assets/img/collections/${wallpaper}.jpeg`)"
    style="display: flex; align-items: center; width: 100%"
    uk-img
  >
    <div
      style="
        width: 100%;
        background-color: rgb(0 0 0 / 60%);
        padding-top: 40px;
        padding-bottom: 30px;
      "
    >
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
        class="uk-container"
      >
        <h3 class="uk-article-title">{{ title }}</h3>
        <div>
          <p uk-margin>
            <button
              class="uk-button uk-button-default uk-button-small"
              style="margin-right: 7px"
              :style="
                displayType === 'gallery' ? 'background-color: #313131' : ''
              "
              @click="displayType = 'gallery'"
            >
              Galerie
            </button>
            <button
              class="uk-button uk-button-default uk-button-small"
              style="margin-right: 7px"
              :style="displayType === 'list' ? 'background-color: #313131' : ''"
              @click="displayType = 'list'"
            >
              Liste
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "explorations-header",
  props: {
    wallpaper: String,
    title: String,
  },
};
</script>

<style></style>
