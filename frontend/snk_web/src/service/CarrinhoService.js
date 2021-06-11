import axios from "axios";

/**
 * Busca carrinho a partir do id do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const getCarrinhoByIdCliente = async (idCliente) => {
  return axios.get(`/cliente/${idCliente}/carrinho`);
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
  return axios.post(`/cliente/${idCliente}/carrinho`);
};

const selecionarEndereco = async (idCliente, idCarrinho, idEndereco) => {
  return axios.post(`/cliente/${idCliente}/carrinho/${idCarrinho}/endereco`, {
    idEndereco,
  });
};

export {
  getCarrinhoByIdCliente,
  findOrCreateCarrinhoByIdCliente,
  selecionarEndereco,
};
