import {
  addItemCarrinho,
  listItemCarrinhos,
} from "../service/ItemCarrinhoService";
import { findOrCreateCarrinhoByIdCliente } from "../service/./CarrinhoService";

const actions = {
  async setCarrinho(context, { idCliente }) {
    const carrinho = await findOrCreateCarrinhoByIdCliente(idCliente)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    context.commit("setState", {
      carrinho: {
        id: carrinho.id,
        idEndereco: carrinho.idEndereco,
        itens: carrinho.itens,
      },
    });
  },
  async setRemoteCarrinhoItems(context, { idCliente, idCarrinho }) {
    const itemCarrinhos = await listItemCarrinhos({ idCliente, idCarrinho })
      .then((response) => response.data)
      .catch((error) => console.log(error));
    context.commit("setState", {
      carrinho: {
        ...context.state.carrinho,
        itens: itemCarrinhos || context.state.carrinho.itens,
      },
    });
  },
  async adicionarItem(context, { idCliente, idCarrinho, idProduto }) {
    addItemCarrinho({ idCliente, idCarrinho, idProduto }).then(() => {
      context.dispatch("setRemoteCarrinhoItems", { idCliente, idCarrinho });
    });
  },
};

export default actions;
