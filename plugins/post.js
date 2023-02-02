export default (http) => ({
  async getPosts() {
    try {
      const posts = await http.$get('https://jsonplaceholder.typicode.com/posts');
      return posts;
    } catch (error) {
      throw new Error(`API Request Error getPosts: ${error}`);
    }
  },
  async getPost(id) {
    try {
      const post = await http.$get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return post;
    } catch (error) {
      throw new Error(`API Request Error getPost: ${error}`);
    }
  },
});
