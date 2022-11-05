<template>
  <div class="shop">
    <div class="uk-cover-container uk-height-large">
      <img :src="require(`@/assets/img/shop/banner.png`)" />
    </div>
    <div class="uk-container">
      <h1 class="uk-flex uk-flex-center">HOODIES & SWEATSHIRTS</h1>
      <!-- card -->
      <div
        class="uk-grid-row-large uk-grid uk-child-width-1-4 uk-text-center uk-flex"
        style="margin-bottom: 50px; margin-top: 70px"
      >
        <a
          v-for="index in 6"
          :key="index"
          class="shop-card"
          style="padding: 15px"
          @mouseover="move()"
        >
          <div
            style="
              border-radius: 7px;
              background-color: white;
              color: grey;
              padding-bottom: 20px;
            "
          >
            <div
              style="border-radius: 7px 7px 0 0"
              class="uk-height-medium uk-background-cover"
              data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
              uk-img
            ></div>

            <div class="w3-light-grey">
              <div
                id="myBar"
                class="w3-green"
                style="height: 24px; width: 0"
              ></div>
            </div>

            <div style="margin-top: 20px">
              <span>Super pull n°1</span>
              <div>60$</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <Footer style="margin-top: 50px" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Shop",
  components: {
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    move() {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    },
  },
};
</script>

<style></style>
