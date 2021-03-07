import { createRouter, createWebHistory } from 'vue-router'
import SnkShop from '../views/SnkShop.vue'
import SnkViewLogin from '../views/SnkViewLogin.vue'

const routes = [
  {
    path: '/outher-shop',
    name: 'SnkShop',
    component: SnkShop
  },
  {
    path: '/shop',
    name: 'SnkShop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkShop.vue')
  },
  {
      path:'/login',
      name:'SnkViewLogin',
      component: SnkViewLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router