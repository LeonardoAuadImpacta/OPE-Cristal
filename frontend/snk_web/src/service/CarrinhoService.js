import Http from "../config/http";

/**
 * Busca carrinho a partir do id do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const getCarrinhoByIdCliente = async (idCliente) => {
  return Http.get(`/carrinho?idCliente=${idCliente}`);
};

/**
 * Busca algum carrinho existente dado id do cliente ou
 * cria um novo caso ainda não exista nenhum carrinho aberto.
 * 
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const findOrCreateCarrinhoByIdCliente = async (idCliente) => {
  return Http.post("/carrinho", { idCliente });
};

export { getCarrinhoByIdCliente, findOrCreateCarrinhoByIdCliente };
