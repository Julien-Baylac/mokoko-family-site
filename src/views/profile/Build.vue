<template>
  <div class="build">
    <div>
      <h2 style="margin-top: 50px; margin-bottom: 40px">Choix des sorts</h2>
      <div style="display: flex; justify-content: center">
        <div class="width: 20%" style="margin-top: 62px; margin-right: 25px">
          <div
            style="width: 100px; height: 100px; margin-right: 20px"
            class="uk-card uk-card-default uk-card-body uk-text-center build-card"
          >
            {{ item }}
          </div>
        </div>
        <div class="width: 80%">
          <ul class="uk-grid-small" uk-sortable="handle: .uk-card" uk-grid>
            <li v-for="item in 4" v-bind:key="item" w>
              <div
                style="width: 100px; margin-right: 20px"
                class="uk-card uk-card-default uk-card-body uk-text-center build-card"
              >
                {{ item }}
              </div>
            </li>
          </ul>
          <ul class="uk-grid-small" uk-sortable="handle: .uk-card" uk-grid>
            <li v-for="item in 4" v-bind:key="item">
              <div
                style="width: 100px; margin-right: 20px"
                class="uk-card uk-card-default uk-card-body uk-text-center build-card"
              >
                {{ item }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h2 style="margin-top: 50px">Choix des sorts</h2>
      <table class="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>Icone</th>
            <th>Nom</th>
            <th>Tripods</th>
            <th>Runes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 8" v-bind:key="item">
            <td>Table Data</td>
            <td>Table Data</td>
            <td>
              <div>
                <ul class="uk-dotnav">
                  <li><a>Item 1</a></li>
                  <li class="uk-active"><a>Item 2</a></li>
                  <li><a>Item 3</a></li>
                </ul>
                <ul
                  class="uk-dotnav"
                  style="margin-top: 10px; margin-bottom: 10px"
                >
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                  <li class="uk-active"><a>Item 3</a></li>
                </ul>
                <ul class="uk-dotnav">
                  <li class="uk-active"><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                  <li><a>Item 3</a></li>
                </ul>
              </div>
            </td>
            <td>Table Data</td>
          </tr>
        </tbody>
      </table>
      <hr
        class="uk-divider-icon"
        style="margin-top: 50px; margin-bottom: 50px"
      />
      <div style="display: flex">
        <div
          class="uk-width-1-2"
          style="display: flex; align-items: center; justify-content: center"
        >
          <div>
            <span>Lance du jugement</span>
          </div>
          <div
            class="uk-height-large uk-background-cover uk-light uk-flex"
            uk-parallax="bgy: -30"
            style="
              width: 130px;
              height: 130px;
              border-radius: 5px;
              margin-left: 20px;
            "
            v-bind:style="{
              backgroundImage:
                'url(' + require(`@/assets/img/skills/lance.webp`) + ')',
            }"
          ></div>
        </div>
        <div
          class="uk-width-1-2"
          style="display: flex; align-items: center; justify-content: center"
        >
          <div
            class="uk-height-large uk-background-cover uk-light uk-flex"
            uk-parallax="bgy: -30"
            style="
              width: 130px;
              height: 130px;
              border-radius: 5px;
              margin-right: 20px;
            "
            v-bind:style="{
              backgroundImage:
                'url(' + require(`@/assets/img/skills/prot.webp`) + ')',
            }"
          ></div>
          <div>
            <span>Protection du gardien </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.build-card {
  border-radius: 4px;
}
</style>
