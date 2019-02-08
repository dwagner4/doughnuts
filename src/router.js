import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Checkers from './views/Checkers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checkers',
      name: 'checkers',
      component: Checkers
    }
  ]
})
