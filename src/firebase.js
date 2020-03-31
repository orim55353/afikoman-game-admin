import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD4pnwpnTaddaH4V-ZxksC2497Kyp7zkjo",
  authDomain: "afikoman-game.firebaseapp.com",
  databaseURL: "https://afikoman-game.firebaseio.com",
  projectId: "afikoman-game",
  storageBucket: "afikoman-game.appspot.com",
  messagingSenderId: "763776021744",
  appId: "1:763776021744:web:ce9fc172c5e2eaf5147e35",
  measurementId: "G-YVK84QRHFJ"
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const questsRef = databaseRef.child("questions");
