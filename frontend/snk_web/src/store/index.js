import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: null
  },
  mutations: {
    setUserSession(state, payload) {
      state.session = payload
    },

    logout(state) {
      state.session =null
    }
  },
  actions: {
  },
  modules: {
  }
})
