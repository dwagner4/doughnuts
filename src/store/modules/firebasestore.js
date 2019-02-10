
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const FBConfig = {
  apiKey: "AIzaSyAddkZMozcJkcrOsjfAXWeI8rFOzVqk3-w",
  authDomain: "chalkers-donuts.firebaseapp.com",
  databaseURL: "https://chalkers-donuts.firebaseio.com",
  projectId: "chalkers-donuts",
  storageBucket: "chalkers-donuts.appspot.com",
  messagingSenderId: "1235417565"
};
firebase.initializeApp(FBConfig);

const firebaseModule = {
  state: {
    user: null,
    error: '',
    initialized: false,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    init({ commit, state }) {
      if (state.initialized) {
        return;
      }
      state.initialized = true;

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log(user);
          commit('SET_USER', user);
        } else {
          commit('SET_USER', null);
        }
      });
    },
    googlelogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    login({ state, dispatch }, credentials) {
      return dispatch('init')
        .then(() => firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password))
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
          state.error = error;
        });
    },
    signup({ state, dispatch }, credentials) {
      return dispatch('init')
      .then(() => firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password))
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        state.error = error;
      });
    },
    logout() {
      firebase.auth().signOut();
    },
  },
};

export default firebaseModule;