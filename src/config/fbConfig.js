import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAf7N-YLWpn-gQS-AAldS-bGgZR9F4XBd8",
  authDomain: "marioplan-f33aa.firebaseapp.com",
  databaseURL: "https://marioplan-f33aa.firebaseio.com",
  projectId: "marioplan-f33aa",
  storageBucket: "marioplan-f33aa.appspot.com",
  messagingSenderId: "299020822268"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
