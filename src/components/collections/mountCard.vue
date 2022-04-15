<template>
  <div class="mount-card">
    <div class="uk-text-center">
      <div
        class="uk-inline-clip uk-transition-toggle uk-light image"
        tabindex="0"
      >
        <img
          :src="require(`@/assets/img/exploration/islands_map.png`)"
          width="1800"
          height="1200"
          alt=""
        />
        <div class="uk-position-top">
          <span
            class="uk-transition-fade"
            style="display: flex; justify-content: flex-end"
          >
            <div>
              <button
                class="uk-button uk-button-default uk-button-small"
                style="
                  margin-right: 5px;
                  background-color: rgb(0 0 0 / 60%);
                  margin-top: 10px;
                "
              >
                Infos
              </button>
              <button
                class="uk-button uk-button-default uk-button-small"
                style="
                  margin-right: 12px;
                  background-color: rgb(0 0 0 / 60%);
                  margin-top: 10px;
                "
              >
                Ajouter
              </button>
            </div>
          </span>
        </div>
        <div
          class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary"
        >
          <p class="uk-h4 uk-margin-remove">{{ name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mount-card",
  props: {
    name: String,
  },
};
</script>

<style scoped>
.image {
  border-radius: 5px !important;
}
</style>
