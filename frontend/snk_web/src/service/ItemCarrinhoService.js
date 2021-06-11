import axios from "axios";

/**
 * List todos items do carrinho do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const listItemCarrinhos = async ({ idCliente, idCarrinho }) => {
  return axios.get(
    `/cliente/${idCliente}/carrinho/${idCarrinho}/item_carrinho`
  );
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
const addItemCarrinho = async ({ idCliente, idCarrinho, idProduto }) => {
  return axios.post(
    `/cliente/${idCliente}/carrinho/${idCarrinho}/item_carrinho`,
    {
      idProduto,
      quantidade: 1,
    }
  );
};

const retirarItemCarrinho = async ({
  idCliente,
  idCarrinho,
  idProduto,
  quantidade,
}) => {
  return axios.delete(
    `/cliente/${idCliente}/carrinho/${idCarrinho}/item_carrinho`,
    {
      data: {
        idProduto,
        quantidade,
      },
    }
  );
};

export { addItemCarrinho, listItemCarrinhos, retirarItemCarrinho };
