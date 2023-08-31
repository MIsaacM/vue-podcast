<template>
  <div :class="[ 'loading_status', { show: loadingRoute } ]">
    Loading...
  </div>
</template>

<script>
export default {
  computed: {
    loadingRoute() {
      return this.$store.state.loadingRoute;
    },
    loadingRoute2() {
      return this.$root.loadingRoute;
    },
  },
};
</script>

<style scoped>
.loading_status {
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  animation: pulses 1s linear infinite alternate;
}
.loading_status.show {
  display: block;
}
@keyframes pulses {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>