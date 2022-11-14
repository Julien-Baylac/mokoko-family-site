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
          @mouseover="progressBar(index)"
          @mouseleave="stopBar(index)"
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
              :data-src="imgList[imageCounter]"
              uk-img
            ></div>

            <div>
              <div
                :id="'bar-' + index"
                style="height: 5px; width: 0; background-color: purple"
              ></div>
            </div>

            <div style="margin-top: 20px">
              <span>Super pull n°{{ index }}</span>
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
    return {
      interval: null,
      mouseInside: false,
      imageCounter: 0,
      imgList: [
        "https://img01.ztat.net/article/spp-media-p1/30378552b5373f08977231af03e7f55c/98688f625ba64cd19f5fa1dfa8bd21c4.jpg?imwidth=1800",
        "https://www.hawkersco.com/dw/image/v2/BDSZ_PRD/on/demandware.static/-/Sites-Master-Catalog-Apparel/default/dwf61b0299/images/master/hawkers-apparel-mex-crop-sweatshirt-grey-HCMEX21T_032-mf1.jpg?sw=860&q=100",
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/06/000/XXL_p0132600006.jpg",
        "https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/450185/item/eugoods_58_450185.jpg?width=450&impolicy=quality_70",
      ],
    };
  },
  methods: {
    progressBar(index) {
      if (!this.mouseInside) {
        var width = 1;
        var elem = document.getElementById("bar-" + index);

        console.log(document.getElementById("bar-" + index));
        this.mouseInside = true;
        this.interval = setInterval(() => {
          if (width >= 100) {
            clearInterval(this.interval);
            this.imageCounter = 0;
          } else {
            this.imageCounter = Math.floor(width / (100 / this.imgList.length));
            width = width + 0.1;
            elem.style.width = `${width}%`;
          }
        }, 10);
      }
    },
    stopBar(index) {
      clearInterval(this.interval);
      this.mouseInside = false;
      var elem = document.getElementById("bar-" + index);
      elem.style.width = "0%";
      this.imageCounter = 0;
    },
  },
};
</script>

<style></style>
