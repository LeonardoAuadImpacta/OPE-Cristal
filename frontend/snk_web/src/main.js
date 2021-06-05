import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import axios from "axios";
import VMask from "v-mask";

Vue.use(VMask);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

axios.defaults.baseURL =
  process.env.VUE_APP_BASE_API_URL || "http://localhost:3000/api/v1/";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      router.push({ path: "/" });
    }
    return Promise.reject(error);
  }
);

new Vue({
  vuetify,
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  mounted() {
    const session = this.$store.state.session;
    if (session && session.token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session.token}`;
    }
  },
  render: (h) => h(App),
}).$mount("#app");
