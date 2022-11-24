<template>
  <div class="guides" style="margin-top: 20px">
    <GuidePanel :panels="panels">
      <template v-slot:slot-classes>
        <div class="uk-text-center" uk-grid>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Moniale - Homme
            </div>
          </div>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Moniale - Femme
            </div>
          </div>
          <div class="uk-width-1-1" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Guerrier - Homme
            </div>
          </div>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Gunner - Homme
            </div>
          </div>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Gunner - Femme
            </div>
          </div>
          <div class="uk-width-1-1" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Mage - Femme
            </div>
          </div>
          <div class="uk-width-1-1" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body"
              style="border-radius: 5px"
            >
              Artiste - Femme
            </div>
          </div>
        </div>
      </template>
      <template v-slot:slot-builds> guides </template>
      <template v-slot:slot-raids>
        <div class="uk-text-center" uk-grid>
          <div class="uk-width-1-2" style="padding: 5px">
            <router-link to="/argos">
              <div
                class="uk-card uk-card-default uk-card-body elevation-card"
                style="border-radius: 5px"
              >
                Argos
              </div>
            </router-link>
          </div>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body elevation-card"
              style="border-radius: 5px"
            >
              Baltan
            </div>
          </div>
          <div class="uk-width-1-1" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body elevation-card"
              style="border-radius: 5px"
            >
              Argos
            </div>
          </div>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body elevation-card"
              style="border-radius: 5px"
            >
              Argos
            </div>
          </div>
          <div class="uk-width-1-2" style="padding: 5px">
            <div
              class="uk-card uk-card-default uk-card-body elevation-card"
              style="border-radius: 5px"
            >
              Baltan
            </div>
          </div>
        </div>
      </template>
      <template v-slot:slot-collections> guides </template>
    </GuidePanel>
    <Footer style="margin-top: 30px" />
  </div>
</template>

<script>
import GuidePanel from "@/components/guides/guide-panel.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Guides",
  components: {
    Footer,
    GuidePanel,
  },
  data() {
    return {
      panels: [
        {
          name: "classes",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
          name: "builds",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          name: "raids",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        },
        {
          name: "collections",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        },
        {
          name: "montures et pets",
          description:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.elevation-card {
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.elevation-card:hover {
  cursor: pointer;
  -webkit-transform: scale(1.03, 1.03);
  transform: scale(1.03, 1.03);
}
</style>
