import axios from "../config/http";

/**
 * List todos items do carrinho do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const listItemCarrinhos = async (idCarrinho) => {
  return axios.get(`/item_carrinho?idCarrinho=${idCarrinho}`);
};

/**
 * Adiciona item ao carrinho.
 *
 * @param {Object} params
 * @param {number} params.idCliente
 * @param {number} params.idProduto
 *
 * @returns {Promise}
 */
const addItemCarrinho = async ({ idCarrinho, idProduto }) => {
  return axios.post(`/item_carrinho/carrinho/${idCarrinho}`, {
    idProduto,
    quantidade: 1,
  });
};

export { addItemCarrinho, listItemCarrinhos };
