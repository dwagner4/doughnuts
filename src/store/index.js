import Vue from 'vue'
import Vuex from 'vuex'
import cker from './modules/checkersstore'
import fbauth from './modules/authentication'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cker, fbauth
  },
  state: {
    a: 'AAAA',
    loading: false,
    loadedPosts: [ 
      {id: 'oiuaoduasod', date: '2019-03-25', post: 'This is hard coded in Vuex'}
      ],
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    CREATE_POST(state, payload) {
      state.loadedPosts.push(payload)
    },
    SET_LOADED_POSTS(state, payload){
      state.loadedPosts = payload
    },
  },
  actions: {
    createPost({commit, getters}, payload) {
      commit('SET_LOADING', true)
      //we could also just pass payload but this is verbose
      const post = {
        post: payload.post,
        date: payload.date,
        //creator: payload.creatorId
      }
      //Reach out to Firebase and store
      firebase.firestore().collection('posts').add(post)
      .then((data) => {
        //console.log(data)
        const id = data.id
        //console.log("id is: ", id)
        commit('CREATE_POST', {
          ...post,
          id: id
        })
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        console.log(error)
        commit('SET_LOADING', true)
      })
    },
    loadPosts({commit}) {
      commit('SET_LOADING', true)
      firebase.firestore().collection('posts').get()
      .then((querySnapshot) => {
        let postsArray = []
        querySnapshot.forEach((doc) => {
        let post = doc.data()
            post.id = doc.id
            postsArray.push(post)
        })
        commit('SET_LOADED_POSTS', postsArray)
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        console.log(error)
        commit('SET_LOADING', true)
      })
    }
  },
  getters: {
    loading(state) {
        return state.loading
    },
    loadedPosts(state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    loadedPost(state) {
      return (postId) => {
        return state.loadedPosts.find((post) => {
          return post.id === postId
        })
      }
    }
  }
})