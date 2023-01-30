export default function ({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  });

  $http.onResponse((req, options, res) => {
    console.log('Making request to ' + req.url)
  });

  $http.onError((err) => {
    // In case of unauthorized, redirect to a specific page
    if (err.statusCode === 401) {
      console.log('redirect to 401')
    }

    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  });
}