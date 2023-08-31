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
main {
  margin: 20px auto;
  max-width: 1600px;
  padding: 20px;
}
</style>