// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClChDpMxXLOV73F32o--eCqy2_z0MufpQ",
  authDomain: "filmstar-app.firebaseapp.com",
  projectId: "filmstar-app",
  storageBucket: "filmstar-app.appspot.com",
  messagingSenderId: "314330213167",
  appId: "1:314330213167:web:35418f6904522e9f8c4fda",
  measurementId: "G-9NNDLVWW1Z",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
