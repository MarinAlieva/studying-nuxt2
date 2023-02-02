<template>
  <div class="users-list">
    <user-card v-for="user in users" :key="user.id" :user="user"/>
    <LazyHydrate when-visible>
      <component-with-logic />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import ComponentWithLogic from '../components/componentWithLogic.vue';
import userCard from '../components/userCard.vue';

export default {
  components: { userCard, ComponentWithLogic, LazyHydrate },
  name: 'UserPage',
  data() {
    return {
      users: [],
    };
  },
  head() {
    return {
      title: 'User list page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'user list user list',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'user userkeywords',
        },
      ]
    }
  },
  async asyncData({ $api}) {
    const users = await $api.user.getUsers();
    return { users }
  },
  mounted() {
    // тут пытаюсь проверить инициализирована ли логика в 
    // компоненте component-with-logic, который я обернула в LazyHydrate

    // component-with-logic содержит кнопку по которой к компоненту 
    // добавляется класс .blue-color, генерирую клик по этой кнопке
    // и смотрю в добавился ли класс в разметке не доскроливая до компонента

    // соответствеено если оборачиваю component-with-logic в LazyHydrate,
    // то клик на кнопку не срабатывает и класс не добавляется
    setTimeout(() => {
      const blueBtn = document.querySelector('.component-with-logic__button');
      if (blueBtn) {
        blueBtn.click();
      }
    }, 1000)
  }
}
</script>

<style scoped>
.users-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
}
</style>
