import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lobby from './views/Lobby.vue'
import Checkers from './views/Checkers.vue'
import Aframe from './views/Aframe.vue'
import Aframe2 from './views/Aframe2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/checkers',
      name: 'checkers',
      component: Checkers
    },
    {
      path: '/aframe',
      name: 'aframe',
      component: Aframe
    },
    {
      path: '/aframe2',
      name: 'aframe2',
      component: Aframe2
    }
  ]
})
