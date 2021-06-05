import axios from "axios";

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
  return await axios.post(`/cliente/${idCliente}/pedido`, { idCarrinho });
};

const listarPedidos = async ({ id }) => {
  return await axios.get(`/cliente/${id}/pedido`);
};

// Admin
const listarTodosPedidos = async () => {
  return await axios.get("/pedido");
};

const updateStatus = async ({ id, status }) => {
  return await axios.put(`/pedido/${id}/status`, { status });
};

export { createPedido, listarPedidos, listarTodosPedidos, updateStatus };
