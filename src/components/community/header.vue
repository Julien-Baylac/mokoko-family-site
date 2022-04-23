<template>
  <div
    class="uk-height-medium uk-background-cover uk-light"
    :data-src="require(`@/assets/img/community/${wallpaper}.jpeg`)"
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
            {{ title }}
          </h3>
          <div class="uk-flex uk-flex-between">
            <div style="margin-top: 20px">
              <dl class="uk-description-list">
                <dt>{{ subtitle }}</dt>
                <dd>
                  {{ description }}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "statistics-header",
  props: {
    wallpaper: String,
    title: String,
    subtitle: String,
    description: String,
  },
};
</script>

<style></style>
