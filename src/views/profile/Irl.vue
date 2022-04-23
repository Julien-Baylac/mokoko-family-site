<template>
  <div class="character">
    <div class="first-form">
      <h2 style="margin-top: 50px">Informations générales</h2>
      <div
        style="display: flex; justify-content: space-between; margin-top: 20px"
      >
        <div style="width: 49%" class="uk-inline">
          <input class="uk-input" type="text" placeholder="Prénom" />
        </div>
        <div style="width: 49%" class="uk-inline">
          <input class="uk-input" type="text" placeholder="Age" />
        </div>
      </div>
      <div class="uk-margin">
        <textarea class="uk-textarea" rows="5" placeholder="Bio"></textarea>
      </div>
    </div>
    <div class="second-form">
      <h2 style="margin-top: 50px">Réseaux sociaux</h2>
      <div style="display: flex; justify-content: space-between">
        <div style="width: 49%" class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: twitch"></span>
          <input class="uk-input" type="text" placeholder="Twitch" />
        </div>
        <div style="width: 49%" class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: twitter"></span>
          <input class="uk-input" type="text" placeholder="Twitter" />
        </div>
      </div>
      <div
        style="display: flex; justify-content: space-between; margin-top: 20px"
      >
        <div style="width: 49%" class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: youtube"></span>
          <input class="uk-input" type="text" placeholder="Youtube" />
        </div>
        <div style="width: 49%" class="uk-inline">
          <span class="uk-form-icon" uk-icon="icon: instagram"></span>
          <input class="uk-input" type="text" placeholder="Instagram" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      casqueLvl: 1,
      stuffTypes: [
        "Tête",
        "Epaule",
        "Torse",
        "Jambes",
        "Mains",
        "Arme",
        "Collier",
        "Boucle 1",
        "Boucle 2",
        "Bague 1",
        "Bague 2",
        "Pierre",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.left-part {
  display: flex;
  justify-content: flex-end;
  margin-left: 30px;
  width: 18%;
  .left-part-in {
    padding: 25px;
    border-radius: 5px;
  }
}
.right-part {
  display: flex;
  justify-content: flex-start;
  margin-right: 30px;
  width: 18%;
  padding: 25px;
  border-radius: 5px;
}
</style>
