import Vue from 'vue'
import Vuex from 'vuex'
import * as cker from './modules/ckerBdData'
import fbauth from './modules/authentication'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cker, fbauth
  },
  state: {
    a: 'AAAA'
  },
  mutations: {

  },
  actions: {

  }
})