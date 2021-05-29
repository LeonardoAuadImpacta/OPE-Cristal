import axios from "axios";

/**
 * Busca carrinho a partir do id do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const getCarrinhoByIdCliente = async (idCliente) => {
  return axios.get(`/carrinho?idCliente=${idCliente}`);
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
  return axios.post("/carrinho", { idCliente });
};

const selecionarEndereco = async (idCarrinho, idEndereco) => {
  return axios.post("/carrinho/endereco", { idCarrinho, idEndereco });
};

export {
  getCarrinhoByIdCliente,
  findOrCreateCarrinhoByIdCliente,
  selecionarEndereco,
};
