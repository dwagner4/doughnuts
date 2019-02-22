/* eslint-disable */
export default {
  state: {
    user: {},
    status: false,
    registerDialog: false,
    userprofile: {},
  },

  getters: {
    user(state) {
      return state.user;
    },
    userprofile(state) {
      return state.userprofile
    },
    isSignedIn(state) {
      return state.status;
    },
    displayName (state) {
      let tempName = state.user.displayName
      if (!tempName) {tempName = 'no name?'}
      return tempName
      // return 'Atom'
    },
    registerDialog (state) {
      return state.registerDialog
    }
  },

  mutations: {
    setUser(state, user) {
      state.user = user; 
    },
    setStatus(state, status) {
      state.status = status; 
    },
    setUserProfile(state, profile) {
      state.userprofile = profile;
    },
    setRegisterDialog(state, dialogState) {
      state.registerDialog = dialogState;
    }
  },
  actions: {
    initauth ( context ) {
      // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
      firebase.auth().onAuthStateChanged(u => {
        if (!u) {
          u = {}
          context.commit("setUserProfile", {})
        } else {
          let docRef = db.collection("users").doc(u.uid);
          console.log(u.uid)
          docRef.get().then(function (doc) {
            if (doc.exists) {
              context.commit("setUserProfile", doc.data())
            } else {
              context.commit('setRegisterDialog', true)
            }
          })
        }
        context.commit("setUser", u);
        context.commit("setStatus", u.uid ? true : false);
      });
    },
    googlelogin (  ) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then( result => {
        let user = result.user;
        console.log("XXXXXXXXXXXXX  ", user)
      }).catch( error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("YYYYYYYY  ", errorCode, errorMessage)
        alert("login error, " + errorCode + ", " + errorMessage)
      })
    },
    logout (  ) {
        firebase.auth().signOut();
    },
    doRegister ( context, payload ) {
      let setRef = db.collection("users")
      let timestamp = Date.now()
      let params = {
        userID: context.state.user.uid,
        username: payload.username,
        useremail: payload.email,
        stamp: timestamp
      }
      setRef.doc(context.state.user.uid).set(params)
      context.commit("setUserProfile", {
        userID: context.state.user.uid,
        username: payload.username,
        useremail: payload.email,
        stamp: timestamp
      })
      context.commit('setRegisterDialog', false)
    }
  }
}