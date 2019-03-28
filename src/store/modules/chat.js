import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  state: {
    user: null,
     loadedPosts: [ 
      {id: 'oiuaoduasod', date: '2019-03-25', post: 'hard coded in Vuex #1'},
      {id: '97s8adsadaf', date: '2019-03-26', post: 'hard coded in Vuex #2'},
      {id: 'asd797sada8', date: '2019-03-27', post: 'hard coded in Vuex #3'},
      ],
  },
  getters: {
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
    },
    user(state) {
      return state.user
    },
  },
  mutations: {
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
        displayName: getters.displayName
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
      firebase.firestore().collection('posts').onSnapshot((querySnapshot) => {
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
  }
}