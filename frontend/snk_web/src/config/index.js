import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:3000"

