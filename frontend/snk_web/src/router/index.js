import SnkViewLogin from '../views/SnkViewLogin.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ASnkViewLoginpp',
    component: SnkViewLogin
  },
  {
    path: '/shop',
    name: 'SnkShop',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkShop.vue'),
    alias: '/'
  },
  {
    path:'/login',
    name:'SnkViewLogin',
    component: SnkViewLogin
  }, 
  {
    path:'/admin-area',
    name: 'SnkAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkAdmin.vue')
  },
  {
    path:'/carrinho',
    name: 'SnkCarrinho',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkCarrinho.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router