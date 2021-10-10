// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1BYDclI6mtGAJSfB9e1R79Y6L0fojsA4",
  authDomain: "reactmessengerclone.firebaseapp.com",
  projectId: "reactmessengerclone",
  storageBucket: "reactmessengerclone.appspot.com",
  messagingSenderId: "177068109269",
  appId: "1:177068109269:web:03a14184336ce3208a615c",
  measurementId: "G-NKBT0DNK1Z",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
