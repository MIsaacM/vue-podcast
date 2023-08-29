<template>
  <div class="main_header">
    <div class="main_header-logo">
      <RouterLink to="/">VUE-PODCAST</RouterLink>
    </div>
  </div>
  <LoadingStatus />
</template>

<script>
import LoadingStatus from './LoadingStatus.vue';

export default {
  components: {
    LoadingStatus,
  },
};
</script>

<style scoped>
.main_header {
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 5px 5px #ccc;
}
</style>