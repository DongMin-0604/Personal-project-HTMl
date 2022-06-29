// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyD34aX_4priI_y_gaspEGgSaGu-QWAm-50",
  authDomain: "stac-test.firebaseapp.com",
  databaseURL: "https://stac-test-default-rtdb.firebaseio.com",
  projectId: "stac-test",
  storageBucket: "stac-test.appspot.com",
  messagingSenderId: "697267300522",
  appId: "1:697267300522:web:09d44f5160f4193fbe08d3",
  measurementId: "G-KVF6W4352E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig)
let database = firebase.database();

module.exports = database;