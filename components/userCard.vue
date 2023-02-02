<template>
  <div class="user-card">
    <h3 class="user-card__name">{{ user.name }}</h3>
    <p>e-mail: {{ user.email }}</p>
    <p>phone: {{ user.phone }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => ({}),
      }
    },
  }
</script>

<style scoped >
p {
  margin: 0;
}
.user-card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background-color: #8080802e;
}
.user-card__name {
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #000;
}

</style>