import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../components/home.vue'
import game from '../components/game.vue'

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/game',
    component: game,
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
