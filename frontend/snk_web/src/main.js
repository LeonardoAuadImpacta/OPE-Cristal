import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:3000/api/v1/"

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')