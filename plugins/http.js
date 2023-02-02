import post from './post';
import user from './user';

const apiFactory = (http) => ({
  post: post(http),
  user: user(http),
});

export default function ({ $http, store }, inject) {
  $http.onRequest(config => {
    store.commit('setLoading', true)
  });

  $http.onResponse((req, options, res) => {
    store.commit('setLoading', false)
  });

  $http.onError((err) => {
    // In case of unauthorized, redirect to a sspecific page
    if (err.statusCode === 401) {
      console.log('redirect to 401')
    }

    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  });

  const api = apiFactory($http);
  inject('api', api);
}