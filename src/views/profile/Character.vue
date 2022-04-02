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
              <span style="margin-right: 10px">+12</span>
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
              <span style="margin-right: 10px">+12</span>
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
              <span style="margin-right: 10px">+12</span>
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
              <span style="margin-right: 10px">+12</span>
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
              <span style="margin-right: 10px">+12</span>
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
              <span style="margin-right: 10px">+12</span>
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
              <span style="margin-left: 10px">+12</span></a
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
              <span style="margin-left: 10px">+12</span></a
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
              <span style="margin-left: 10px">+12</span></a
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
              <span style="margin-left: 10px">+12</span></a
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
              <span style="margin-left: 10px">+12</span></a
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
              <span style="margin-left: 10px">+12</span></a
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
  margin-left: 30px;
}
.right-part {
  margin-right: 30px;
}
</style>
