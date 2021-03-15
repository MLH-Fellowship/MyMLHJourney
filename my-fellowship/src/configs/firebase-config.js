import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh8w43aCPB18rHjTbEaCB7R5wK-gYk2Tg",
  authDomain: "fellowshipjourney-e1b2e.firebaseapp.com",
  projectId: "fellowshipjourney-e1b2e",
  storageBucket: "fellowshipjourney-e1b2e.appspot.com",
  messagingSenderId: "680551914193",
  appId: "1:680551914193:web:3f06c8dbf0a78253ba83f0",
  measurementId: "G-1PEK68160C",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
