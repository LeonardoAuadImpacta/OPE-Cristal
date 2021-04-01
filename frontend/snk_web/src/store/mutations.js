const mutations = {
  initialiseStore(state) {
    const localStorageStore = (localStorage.getItem("store") && JSON.parse(localStorage.getItem("store"))) || {};
    this.replaceState(Object.assign(state, localStorageStore));
  },
  setState(state, newState) {
    this.replaceState(Object.assign(state, newState));
  },
  setUserSession(state, payload) {
    state.session = payload;
  },
  logout(state) {
    state.carrinho = [];
    state.session = null;
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
}

export default mutations;
