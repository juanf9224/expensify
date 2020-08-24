import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBo9x2JBzttSu2dIIu8TUpCrlD7rcAzol0",
  authDomain: "expensify-90aca.firebaseapp.com",
  databaseURL: "https://expensify-90aca.firebaseio.com",
  projectId: "expensify-90aca",
  storageBucket: "expensify-90aca.appspot.com",
  messagingSenderId: "853914441751",
  appId: "1:853914441751:web:ec9d370c4fd9ee1893a452",
  measurementId: "G-MYNXFKQBW2"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }




