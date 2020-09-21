// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAt4WY-tg_WTUk1b1wGJR1YrbY0Jwe-JNU",
  authDomain: "mert-twitter-clone.firebaseapp.com",
  databaseURL: "https://mert-twitter-clone.firebaseio.com",
  projectId: "mert-twitter-clone",
  storageBucket: "mert-twitter-clone.appspot.com",
  messagingSenderId: "755850278474",
  appId: "1:755850278474:web:36be70f0f54df41ff498b3",
  measurementId: "G-NLCBV9RGVW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
