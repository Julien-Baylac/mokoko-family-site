<template>
  <div class="players">
    <div class="uk-container">
      <h3 class="uk-article-title uk-margin-medium-top">Les joueurs</h3>
      <div class="uk-flex uk-flex-between">
        <div style="margin-top: 20px">
          <dl class="uk-description-list">
            <dt>Barème du Top puissance</dt>
            <dd>Niveau x10 | Expé niveau x15 | Point x3 | Ilvl x2</dd>
          </dl>
        </div>
      </div>
    </div>
    <Footer style="margin-top: 100px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "players",
  components: { Footer },
};
</script>

<style></style>
