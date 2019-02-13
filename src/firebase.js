import firebase from "@firebase/app";
import "@firebase/auth";
import store from "./store";

const config = {
  apiKey: "AIzaSyAffdVdL1ULzGsIHb8fIQS9CrIqhZi28nY",
  authDomain: "fir-auth-9fe24.firebaseapp.com",
  databaseURL: "https://fir-auth-9fe24.firebaseio.com",
  projectId: "fir-auth-9fe24",
  storageBucket: "fir-auth-9fe24.appspot.com",
  messagingSenderId: "1097808199224"
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  googlelogin() {
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
