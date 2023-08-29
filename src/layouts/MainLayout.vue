<template>
  <MainHeader />
  <main>
    <slot />
  </main>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';

export default {
  components: { MainHeader },
};
</script>

<style scoped>
</style>