import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VMask from "v-mask";

import router from "./router";
import store from "./store";
import titleMixin from "./mixins/titleMixin";

Vue.use(VMask);
Vue.mixin(titleMixin);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

axios.defaults.baseURL =
  process.env.VUE_APP_BASE_API_URL || "http://localhost:3000/api/v1/";
axios.defaults.headers.post["Content-Type"] = "application/json";

new Vue({
  vuetify,
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  created() {
    const session = this.$store.state.session;
    if (session && session.token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session.token}`;
    }
  },
  render: (h) => h(App),
}).$mount("#app");
