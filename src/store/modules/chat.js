import { db } from '@/fb'

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
    uuser(state) {
      return state.user
    },
  },
  mutations: {
    
    SET_LOADED_POSTS(state, payload){
      state.loadedPosts = payload
    },
  },
  actions: {
    createPost({commit, getters}, payload) {
      commit('SET_LOADING', true)
      //we could also just pass payload but adding user displayname
      const post = {
        post: payload.post,
        date: payload.date,
        displayName: getters.displayName
      }
      //Reach out to Firebase and store
      db.collection('posts').add(post)
      .then((data) => {
        //console.log(data)
        const id = data.id
        console.log("id is: ", id)
      
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        console.log(error)
        commit('SET_LOADING', true)
      })
    },
    listenForPosts({commit}) {
      commit('SET_LOADING', true)
      let postsArray = []
      db.collection('posts').orderBy('date').onSnapshot(snapshot => {
        let changes = snapshot.docChanges()
        changes.forEach(change => {
          //console.log(change.doc.data())
          if(change.type == 'added') {
            let post = change.doc.data()
                post.id = change.doc.id
                postsArray.push(post)
                commit('SET_LOADED_POSTS', postsArray)
                commit('SET_LOADING', false)
          }
        })
      })
    },
    
  }
}