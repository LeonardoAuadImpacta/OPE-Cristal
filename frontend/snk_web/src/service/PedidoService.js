import axios from "../config/http";

/*
 * Cria pedido com base no cliente logado
 * e o carrinho atual. Note que ao criar um
 * novo pedido, o carrinho atual é transitado
 * para o status FECHADO.
 *
 * @param {Object} payload
 * @param {number} payload.idCliente
 * @param {number} payload.idCarrinho
 *
 * @returns {Promise}
 */
const createPedido = async ({ idCliente, idCarrinho }) => {
  return await axios.post("/pedido", { idCliente, idCarrinho });
};

export { createPedido };
