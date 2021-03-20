import SnkViewLogin from '../views/SnkViewLogin.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/shop',
    name: 'SnkShop',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkShop.vue')
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
  },
  {
    path:'/confirma',
    name: 'SnkConfirmView',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkConfirmView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router