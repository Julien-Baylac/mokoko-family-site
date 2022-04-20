<template>
  <div class="players">
    <div class="uk-container">
      <h3 class="uk-article-title uk-margin-medium-top">Les joueurs</h3>
      <div class="uk-flex uk-flex-between">
        <div style="margin-top: 20px">
          <dl class="uk-description-list">
            <dt>Les joueurs de la communauté</dt>
            <dd>Niveau x10 | Expé niveau x15 | Point x3 | Ilvl x2</dd>
          </dl>
        </div>
      </div>
      <div class="uk-margin-medium-top" style="margin-bottom: 50px">
        <ul class="uk-flex-center" uk-tab>
          <li><a @click="changeSection('ilvl')">Zinnervale</a></li>
          <li><a @click="changeSection('classes')">Trixion</a></li>
          <li><a @click="changeSection('comparator')">Wei</a></li>
        </ul>
      </div>
      <div>
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
            <h4>Sorcière</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Berserker</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Paladin</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Sanguelame</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Fusilière</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Barde</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Démoniste</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
        <!-- second line -->
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
            <h4>Pistolancier</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Spirite</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Essentialiste</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Artilleur</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Élémentiste</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Franc-tireur</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h4>Salve implacable</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        </div>
        <!-- 3th line -->
        <div class="uk-child-width-expand@s" uk-grid>
          <div>
            <h4>Pugiliste</h4>
            <ul class="uk-list uk-list-collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
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
