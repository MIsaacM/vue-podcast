<template>
  <table>
    <tr>
      <th>Title</th>
      <th>Date</th>
      <th>Duration</th>
    </tr>
    <tr>
      <td>
        <RouterLink :to="{ path: `/podcast/1/episode/2` }">Episode 2</RouterLink>
      </td>
      <td>29/08/2023</td>
      <td>09:25</td>
    </tr>
  </table>
</template>

<script>
export default {
};
</script>

<style scoped>
</style>