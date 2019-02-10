import firebase from "@firebase/app";
import "@firebase/auth";
import store from "./store";

const config = {
  apiKey: "AIzaSyAddkZMozcJkcrOsjfAXWeI8rFOzVqk3-w",
  authDomain: "chalkers-donuts.firebaseapp.com",
  databaseURL: "https://chalkers-donuts.firebaseio.com",
  projectId: "chalkers-donuts",
  storageBucket: "chalkers-donuts.appspot.com",
  messagingSenderId: "1235417565"
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  logout() {
    firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit("onAuthStateChanged", user);
      store.commit("onUserStatusChanged", user.uid ? true : false);
    });
  }
};
