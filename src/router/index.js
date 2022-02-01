import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/akhbotir',
    name: 'AkhBotir',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AkhBotir.vue')
  },
  {
    path: '/botirstudio',
    name: 'BotirStudio',
    component: () => import('../views/BotirStudio.vue')
  },
  {
    path: '/uzcoders',
    name: 'UzCoders',
    component: () => import('../views/UzCod.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
