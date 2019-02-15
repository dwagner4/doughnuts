export default {
  state: {
    user: {},
    status: false
  },

  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    }
  },

  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; // firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; // ログインしているかどうか true or false
    }
  },
  actions: {
    initauth ( context ) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      firebase.auth().onAuthStateChanged(user => {
        user = user ? user : {};
        context.commit("onAuthStateChanged", user);
        context.commit("onUserStatusChanged", user.uid ? true : false);
      });
    },
    googlelogin ( context ) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout ( context ) {
      firebase.auth().signOut();
    }
  }
}