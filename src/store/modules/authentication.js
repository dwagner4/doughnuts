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
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          user = user
        } else {
          user = {}
        }


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