const config = {
  api: 'http://ec2-52-17-134-184.eu-west-1.compute.amazonaws.com:14000/api',
  maxNotificationsNum: 4,
  requestTimeout: 240000,
  firebaseDevConfig: {
    apiKey: 'AIzaSyDuI4yAzVMLwHq0k_WWLtZ7rIyuUKFn2n8',
    authDomain: 'sidweb-sanbox.firebaseapp.com',
    databaseURL: 'https://sidweb-sanbox.firebaseio.com',
    projectId: 'sidweb-sanbox',
    storageBucket: 'sidweb-sanbox.appspot.com',
    messagingSenderId: '650146106769'
  },
  firebaseProdConfig: {
    apiKey: 'AIzaSyDuI4yAzVMLwHq0k_WWLtZ7rIyuUKFn2n8',
    authDomain: 'sidweb-sanbox.firebaseapp.com',
    databaseURL: 'https://sidweb-sanbox.firebaseio.com',
    projectId: 'sidweb-sanbox',
    storageBucket: 'sidweb-sanbox.appspot.com',
    messagingSenderId: '650146106769'
  }
};

export default config;
