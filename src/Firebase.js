// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-8C_5ziVG7L7afLlXr9XQ4xIdjwXTp4",
  authDomain: "tunesmash-8b9c8.firebaseapp.com",
  databaseURL: "https://tunesmash-8b9c8-default-rtdb.firebaseio.com",
  projectId: "tunesmash-8b9c8",
  storageBucket: "tunesmash-8b9c8.appspot.com",
  messagingSenderId: "1051793012922",
  appId: "1:1051793012922:web:652311615c3d299cb52a83",
  measurementId: "G-DN14YLE94C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);