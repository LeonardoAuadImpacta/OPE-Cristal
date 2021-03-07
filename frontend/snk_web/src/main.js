import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

createApp(App).use(router).use(router).mount('#app')
Vue.use(VueRouter)
