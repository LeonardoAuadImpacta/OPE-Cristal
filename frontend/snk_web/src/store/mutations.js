import axios from "axios";

const mutations = {
  initialiseStore(state) {
    const localStorageStore =
      (localStorage.getItem("store") &&
        JSON.parse(localStorage.getItem("store"))) ||
      {};
    this.replaceState(Object.assign(state, localStorageStore));
  },
  setState(state, newState) {
    this.replaceState(Object.assign({}, state, newState));
  },
  setUserSession(state, payload) {
    state.session = payload;
  },
  logout(state) {
    state.carrinho = {
      id: null,
      itens: [],
    };
    state.session = null;
  },
  verifuQtdCarrinho(state) {
    let removeZero = [];
    for (var i in state.carrinho.itens) {
      let qtd = state.carrinho.itens[i].qtd;
      if (qtd == 0) {
        removeZero.push(i);
      }
    }
    removeZero.forEach((rm) => {
      state.carrinho.itens.splice(rm, 1);
    });
  },
  fecharPedido(state) {
    state.carrinho.itens = [];
  },
  setToken(_, token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
};

export default mutations;
