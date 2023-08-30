<template>
  <div class="loading_status" v-cloak>
    Loading...
  </div>
</template>

<script>
export default {
  beforeMount() {
    setTimeout(() => {
      
    }, 5000);
  },
};
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
[v-cloak]::before {
  display: block;
}
</style>