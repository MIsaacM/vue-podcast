<template>
  <div :class="[ 'loading_status', { show: loadingRoute || loadingData } ]">
    <div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loadingRoute() {
      return this.$store.state.loadingRoute;
    },
    loadingData() {
      return this.$store.state.loadingData;
    },
  },
};
</script>

<style scoped>
.loading_status {
  display: none;
  position: absolute;
  top: 10px;
  right: 30px;
  animation: pulses 1s linear infinite alternate;
}
.loading_status.show {
  display: block;
}
@keyframes pulses {
  from {opacity: 0;}
  to {opacity: 1;}
}
.loading_status div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 3px solid var(--color-secondary);
  border-radius: 100%;
  animation: color .5s linear infinite alternate;
}
.loading_status div div {
  width: 5px;
  height: 5px;
  border: 3px solid var(--color-secondary);
  border-radius: 100%;
  animation: color .5s linear infinite alternate;
}
@keyframes color {
  from {border: 3px solid var(--color-secondary);}
  to {border: 3px solid var(--color-primary);}
}
</style>