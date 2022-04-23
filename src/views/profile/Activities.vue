<template>
  <div class="activities">
    <ul class="uk-switcher uk-margin">
      <li v-for="item in 3" v-bind:key="item">
        <table class="uk-table uk-table-striped">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
