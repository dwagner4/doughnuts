import Vue from 'vue'
import Vuex from 'vuex'
import cker from './modules/checkersstore'
import FB from './modules/firebasestore'


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

  }
})