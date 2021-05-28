import { addItemCarrinho, listItemCarrinhos } from "../service/ItemCarrinhoService";
import { findOrCreateCarrinhoByIdCliente } from "../service/./CarrinhoService";

const actions = {
  async setCarrinho(context, { idCliente }) {
    console.log(idCliente)
    const carrinho = await findOrCreateCarrinhoByIdCliente(idCliente)
      .then(response => response.data)
      .catch(error => console.log(error));
    context.commit("setState", {
      carrinho: {
        id: carrinho.id,
        itens: carrinho.itens
      }
    });
  },
  async setRemoteCarrinhoItems(context) {
    const idCarrinho = context.state.carrinho.id;
    const itemCarrinhos = await listItemCarrinhos(idCarrinho)
      .then(response => response.data)
      .catch(error => console.log(error));
    context.commit("setState", {
      carrinho: {
        ...context.state.carrinho,
        itens: itemCarrinhos || context.state.carrinho.itens
      }
    });
  },
  async adicionarItem(context, { idCarrinho, idProduto }) {
    addItemCarrinho({ idCarrinho, idProduto }).then(() => {
      context.dispatch("setRemoteCarrinhoItems");
    });
  },
}

export default actions;
