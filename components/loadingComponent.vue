<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    computed: {
      loading() {
        return this.$store.state.loading
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    color: #ffffff;
  }
</style>