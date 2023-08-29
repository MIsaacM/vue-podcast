<template>
  <div class="loading_status" v-cloak>
    Loading...
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading_status {
  position: absolute;
  top: 10px;
  right: 10px;
}
[v-cloak] {
  display: none;
}
</style>