import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './modules/firebasestore'
import checkerstore from './modules/checkersstore'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    firebase,
    checkerstore
  }
})