<template>
  <div class="skins">
    <div class="uk-container">
      <table class="uk-table uk-table-striped" style="margin-bottom: 60px">
        <thead>
          <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style></style>
