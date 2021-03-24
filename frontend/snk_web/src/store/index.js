import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    session: null,
    carrinho: []
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    setUserSession(state, payload) {
      state.session = payload;
    },
    logout(state) {
      state.session = null;
    },
    adicionarItem(state, item) {
      let isNew = true;
      for (var i in state.carrinho) {
        let id = state.carrinho[i].item.id;
        if (id == item.id) {
          state.carrinho[i].qtd = state.carrinho[i].qtd + 1;
          isNew = false;
          break;
        }
      }
      if (isNew) {
        let itemCarrinho = {
          item: item,
          qtd: 1
        };
        state.carrinho.push(itemCarrinho);
      }
    },
    verifuQtdCarrinho(state) {
      let removeZero = [];
      for (var i in state.carrinho) {
        let qtd = state.carrinho[i].qtd;
        if (qtd == 0) {
          removeZero.push(i);
        }
      }

      removeZero.forEach(rm => {
        state.carrinho.splice(rm, 1);
      });
    },
    fecharPedito(state) {
      state.carrinho = [];
    }
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
