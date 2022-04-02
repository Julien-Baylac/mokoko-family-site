<template>
  <div class="character">
    <div
      class="uk-flex uk-flex-between uk-background-cover uk-light"
      :data-src="require(`@/assets/img/profile/selfi.jpg`)"
      style="border-radius: 10px; height: 520px"
      uk-img
    >
      <div class="left-part" style="margin-top: 3.5%">
        <ul class="uk-thumbnav uk-thumbnav-vertical" uk-margin>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
          <li class="uk-active">
            <div>
              <span style="margin-right: 10px"
                >Tier 1 <span uk-icon="triangle-right"></span> +12</span
              >
              <img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: orange; border-radius: 5px"
                width="50"
                height="50"
              />
            </div>
          </li>
        </ul>
      </div>
      <div style="margin-top: 30px">
        <span style="margin-right: 30px">
          <a href="" uk-icon="heart" style="margin-right: 5px"></a>
          1000.791</span
        >
        <span>
          <a href="" uk-icon="bolt" style="margin-right: 5px"></a>15537</span
        >
      </div>
      <div class="right-part" style="margin-top: 3.5%">
        <ul class="uk-thumbnav uk-thumbnav-vertical" uk-margin>
          <li class="uk-active">
            <a href="#"
              ><img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px"
                >+12 <span uk-icon="triangle-left"></span> Tier 1</span
              ></a
            >
          </li>
          <li class="uk-active">
            <a href="#"
              ><img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px"
                >+12 <span uk-icon="triangle-left"></span> Tier 1</span
              ></a
            >
          </li>
          <li class="uk-active">
            <a href="#"
              ><img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px"
                >+12 <span uk-icon="triangle-left"></span> Tier 1</span
              ></a
            >
          </li>
          <li class="uk-active">
            <a href="#"
              ><img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px"
                >+12 <span uk-icon="triangle-left"></span> Tier 1</span
              ></a
            >
          </li>
          <li class="uk-active">
            <a href="#"
              ><img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px"
                >+12 <span uk-icon="triangle-left"></span> Tier 1</span
              ></a
            >
          </li>
          <li class="uk-active">
            <a href="#" class="uk-flex"
              ><img
                :src="require(`@/assets/img/profile/stuff/item1.webp`)"
                style="background-color: purple; border-radius: 5px"
                width="50"
                height="50"
              />
              <span style="margin-left: 10px; max-height: 50px; font-size: 12px"
                ><span style="font-size: 15px">Tier 1</span><br />+5 Charge
                lourde <br />+6 Barricade <br />+3 Réduction de défence</span
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.left-part {
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
  width: 18%;
}
.right-part {
  display: flex;
  justify-content: flex-start;
  margin-right: 30px;
  width: 18%;
}
</style>
