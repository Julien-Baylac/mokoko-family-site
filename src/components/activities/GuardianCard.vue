<template>
  <div class="uk-section dungeon-card">{{ guardians }}</div>
</template>

<script>
export default {
  props: {
    guardians: Array,
  },
  data() {
    return {
      need: [
        {
          id: 1,
          name: "Gustave",
          ilvl: 1278,
          class: "pistolancier",
        },
        {
          id: 2,
          name: "Bob",
          ilvl: 1045,
          class: "pistolancier",
        },
        {
          id: 3,
          name: "John Doe",
          ilvl: 370,
          class: "pistolancier",
        },
      ],
      done: [
        {
          id: 1,
          name: "Gustave",
          ilvl: 1278,
          class: "pistolancier",
        },
        {
          id: 2,
          name: "Bob",
          ilvl: 1045,
          class: "pistolancier",
        },
        {
          id: 3,
          name: "John Doe",
          ilvl: 370,
          class: "pistolancier",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dungeon-card {
  margin-bottom: 30px;
}
</style>
