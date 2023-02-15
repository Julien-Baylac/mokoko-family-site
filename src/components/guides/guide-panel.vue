<template>
  <div class="uk-text-center" uk-grid>
    <div
      v-for="(panel, index) in panels"
      :key="index"
      :class="targetPanel === index ? 'uk-width-1-3' : 'uk-width-expand'"
      @mouseover="targetPanel = index"
      @mouseleave="targetPanel = null"
    >
      <div
        class="uk-card uk-card-default uk-card-body uk-flex uk-flex-column uk-flex-between"
        style="
          border-radius: 8px;
          height: 800px;
          margin-left: 10px;
          margin-right: 10px;
        "
        :style="{
          'background-image':
            targetPanel === index
              ? 'url(https://la-static.prod-my.games/images/detail-bg.jpg?9676f5635798a17a8ca5acee2f3167b7)'
              : 'url(https://la-static.prod-my.games/images/detail-bg.jpg?9676f5635798a17a8ca5acee2f3167b7)',
        }"
      >
        <div>
          <div style="font-size: 30px">{{ panel.name }}</div>
          <div v-if="targetPanel === index" style="margin-top: 20px">
            {{ panel.description }}
          </div>
        </div>
        <div v-if="targetPanel !== index">image</div>
        <div v-else>
          <slot :name="`slot-${panel.name}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuidePanel",
  props: {
    panels: [],
  },
  data() {
    return {
      targetPanel: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
