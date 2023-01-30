<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
import { articleAPI } from '@/plugins/article'

export default {
  name: 'ArticlePage',
  data() {
    return {
      article: [],
    };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.article.keywords,
        },
      ]
    }
  },
  async asyncData({ params, $http }) {
    const article = await articleAPI.getArticle();
    return { article }
  },
}
</script>
