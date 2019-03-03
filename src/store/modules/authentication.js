/* eslint-disable */
export default {
  state: {
    user: {},
    status: false,
    registerDialog: false,
    userprofile: {},
    heartBeat: null,
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
    SET_USER(state, user) {
      state.user = user; 
    },
    SET_STATUS(state, status) {
      state.status = status; 
    },
    SET_USER_PROFILE(state, profile) {
      state.userprofile = profile;
    },
    SET_REGISTER_DIALOG(state, dialogState) {
      state.registerDialog = dialogState;
    },
    HEART_BEAT( state, beat) {
      state.heartBeat = beat
    }
  },
  actions: {
    initauth ( context ) {
      // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
      firebase.auth().onAuthStateChanged(u => {
        if (!u) {
          u = {}
          context.commit("SET_USER_PROFILE", {})
          if (context.state.heartBeat) {
            clearInterval(context.state.heartBeat)
          }
        } else {
          let docRef = db.collection("users").doc(u.uid);
          console.log(u.uid)
          docRef.get().then(function (doc) {
            if (doc.exists) {
              let theProfile = doc.data()
              context.commit("SET_USER_PROFILE", theProfile)
              // context.state.heartBeat = setInterval(function () {
              let hartTemp = setInterval(function () {
                console.log("I am in the heartbeat")
                let setRef = db.collection("users").doc(theProfile.userID)
                setRef.update({heartBeat: firebase.firestore.Timestamp.now()})
              }, 10000)
              context.commit('HEART_BEAT', hartTemp)
            } else {
              context.commit('SET_REGISTER_DIALOG', true)
            }
          })
        }
        context.commit("SET_USER", u);
        context.commit("SET_STATUS", u.uid ? true : false);
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
      let params = {
        userID: context.state.user.uid,
        username: payload.username,
        useremail: payload.email,
        stamp: firebase.firestore.Timestamp.now(),
      }
      setRef.doc(context.state.user.uid).set(params)
      context.commit("SET_USER_PROFILE", {
        userID: params.userID,
        username: params.username,
        useremail: params.email,
        stamp: params.stamp
      })
      context.commit('SET_REGISTER_DIALOG', false)
    }
  }
}