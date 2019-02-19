/* eslint-disable */
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
    },
    displayName (state) {
      let tempName = state.user.displayName
      if (!tempName) {tempName = 'no name?'}
      return tempName
      // return 'Atom'
    }
  },

  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; 
    },
    onUserStatusChanged(state, status) {
      state.status = status; 
    }
  },
  actions: {
    initauth ( context ) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      firebase.auth().onAuthStateChanged(u => {
        if (!u) {
          u = {}
        }


        context.commit("onAuthStateChanged", u);
        context.commit("onUserStatusChanged", u.uid ? true : false);
      });
    },
    googlelogin (  ) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout (  ) {
        firebase.auth().signOut();
    }
  }
}