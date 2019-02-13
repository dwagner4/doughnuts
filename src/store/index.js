import Vue from 'vue'
import Vuex from 'vuex'
import cker from './modules/checkersstore'
import FB from './modules/firebasestore'
import Firebase from '../firebase'
Firebase.init();  //  initial firebase and set auth listener

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cker, FB
  },
  state: {
    a: 'AAAA'
  },
  mutations: {

  },
  actions: {
    googlelogin (context) {
      console.log("in the store action googlelogin")
      Firebase.googlelogin()
    },
    logout (context) {
      console.log("in the store action logout")
      Firebase.logout()
    },
    onAuth (context) {
      console.log("in the store action onAuth")
      Firebase.onAuth()
    }
  }
})