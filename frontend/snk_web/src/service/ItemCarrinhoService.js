import Http from "../config/http";
import { findOrCreateCarrinhoByIdCliente } from "./CarrinhoService";

/**
 * List todos items do carrinho do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const listItemCarrinhos = async (idCliente) => {
  const carrinho = await findOrCreateCarrinhoByIdCliente(idCliente)
        .then(response => response.data)
        .catch(error => console.log(error));
  return Http.get(`/item_carrinho?idCarrinho=${carrinho.id}`);
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
const addItemCarrinho = async ({ idCliente, idProduto }) => {
  const response = await findOrCreateCarrinhoByIdCliente(idCliente);
  const idCarrinho = response.data.id;

  return Http.post(`/item_carrinho/carrinho/${idCarrinho}`, {
    idProduto,
    quantidade: 1,
  });
};

export { addItemCarrinho, listItemCarrinhos };
