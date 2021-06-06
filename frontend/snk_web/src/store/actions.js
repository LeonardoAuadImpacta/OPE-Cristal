import {
  addItemCarrinho,
  listItemCarrinhos,
  retirarItemCarrinho,
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
    await addItemCarrinho({ idCliente, idCarrinho, idProduto }).then(() => {
      context.dispatch("setRemoteCarrinhoItems", { idCliente, idCarrinho });
    });
  },
  async retirarItem(context, { idCliente, idCarrinho, idProduto }) {
    await retirarItemCarrinho({
      idCliente,
      idCarrinho,
      idProduto,
      quantidade: 1,
    }).then(() => {
      context.dispatch("setRemoteCarrinhoItems", { idCliente, idCarrinho });
    });
  },
  async deletarItens(
    context,
    { idCliente, idCarrinho, idProduto, quantidade }
  ) {
    await retirarItemCarrinho({
      idCliente,
      idCarrinho,
      idProduto,
      quantidade,
    }).then(() => {
      context.dispatch("setRemoteCarrinhoItems", { idCliente, idCarrinho });
    });
  },
};

export default actions;
