import { addItemCarrinho } from "../service/ItemCarrinhoService";
import { listItemCarrinhos } from "../service/ItemCarrinhoService";

const actions = {
  async setRemoteCarrinhoItems(context) {
    const idCliente = context.state.session.id;
    const itemCarrinhos = await listItemCarrinhos(idCliente)
      .then(response => response.data)
      .catch(error => console.log(error));
    context.commit("setState", {carrinho: itemCarrinhos || context.itemCarrinhos});
  },
  async adicionarItem(context, { idCliente, idProduto }) {
    addItemCarrinho({ idCliente, idProduto }).then(() => {
      context.dispatch("setRemoteCarrinhoItems", idCliente);
    });
  },
}

export default actions;
