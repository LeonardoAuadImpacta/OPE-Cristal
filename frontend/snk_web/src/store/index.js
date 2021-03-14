import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session: null,
    carrinho: []
  },
  mutations: {
    setUserSession(state, payload) {
      state.session = payload
    },

    logout(state) {
      state.session =null
    },
    adicionarItem(state,item) {
      state.carrinho.push(item)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
