<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostPage',
  data() {
    return {
      posts: [],
    };
  },
  head() {
    return {
      title: 'Post list page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'post list post list',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'post postkeywords',
        },
      ]
    }
  },
  async asyncData({ $api }) {
    const posts = await $api.post.getPosts();
    return { posts }
  },
}
</script>
