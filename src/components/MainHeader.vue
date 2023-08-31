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
  position: sticky;
  top: 0;
  background: #fff;
  padding: 10px 20px;
  box-shadow: 0px 2px 5px var(--color-border);
}
.main_header-logo a {
  color: var(--color-primary);
  font-size: 20px;
  font-weight: bold;
  transition: all .2s;
}
.main_header-logo a:hover {
  color: var(--color-secondary);
}
</style>