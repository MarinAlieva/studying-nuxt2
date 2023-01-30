<template>
  <div>
    <h2>{{ news.title }}</h2>
    <p>{{ news.content }}</p>
  </div>
</template>

<script>
import { newsAPI } from '@/plugins/article'

export default {
  name: 'NewsPage',
  data() {
    return {
      news: [],
    };
  },
  head() {
    return {
      title: this.news.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.news.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.news.keywords,
        },
      ]
    }
  },
  async asyncData({ params, $http }) {
    const news = await newsAPI.getNews()
    return { news }
  },
}
</script>
