// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1C1mNg22z97wzKh2oBbSMZRUNKg0LqSU",
  authDomain: "netflix-clone-project-703bd.firebaseapp.com",
  databaseURL: "https://netflix-clone-project-703bd.firebaseio.com",
  projectId: "netflix-clone-project-703bd",
  storageBucket: "netflix-clone-project-703bd.appspot.com",
  messagingSenderId: "282684682805",
  appId: "1:282684682805:web:bca1204233b970c854777c",
  measurementId: "G-6WHVPSX718",
};

//Initialized firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initialize the db
const db = firebaseApp.firestore();

//Initialize the authentication
const auth = firebase.auth();

export { db, auth };

//Firebase website... project setting, scroll to the bottom, click config and copy it to firebase.js

//Install Firebase in the project - npm install firebase

//
