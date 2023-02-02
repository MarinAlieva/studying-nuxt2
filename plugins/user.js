export default (http) => ({
  async getUsers() {
    try {
      const users = await http.$get('https://jsonplaceholder.typicode.com/users');
      return users;
    } catch (error) {
      throw new Error(`API Request Error getUsers: ${error}`);
    }
  },
  async getUser(id) {
    try {
      const user = await http.$get(`https://jsonplaceholder.typicode.com/users/${id}`);
      return user;
    } catch (error) {
      throw new Error(`API Request Error getUser: ${error}`);
    }
  },
});
