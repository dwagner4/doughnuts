import Vue from 'vue'
import Vuex from 'vuex'
import firebasestore from '@/store//modules/firebasestore'
import checkersstore from '@/store//modules/checkersstore'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    firebasestore,
    checkersstore
  }
})