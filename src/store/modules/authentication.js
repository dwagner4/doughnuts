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
        } else {
          let docRef = db.collection("users").doc(u.uid);
          console.log(u.uid)
          docRef.get().then(function (doc) {
            if (doc.exists) {
              console.log(doc)
            } else {
              let setRef = db.collection("users")
              setRef.doc(u.uid).set({
                userID: u.uid,
                username: u.displayName
              })
            }
            
          })
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