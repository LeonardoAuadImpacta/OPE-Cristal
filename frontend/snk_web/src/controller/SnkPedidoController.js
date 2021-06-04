import {
  listarTodosPedidos as _listarTodosPedidos,
  listarPedidos as _listarPedidos,
  createPedido as _createPedido,
  updateStatus as _updateStatus,
} from "../service/PedidoService";

const createPedido = async ({ idCliente, idCarrinho }, view) => {
  return _createPedido({ idCliente, idCarrinho })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        view.$store.dispatch("setCarrinho", { idCliente });
        view.dialog = true;
      } else {
        console.log(res);
        view.flagAlert("Error");
      }
    })
    .catch((err) => {
      console.log(err);
      view.flagAlert(err.response.data.error);
    });
};

const listarPedidos = _listarPedidos;
const listarTodosPedidos = _listarTodosPedidos;
const updateStatus = _updateStatus;

export { createPedido, listarPedidos, listarTodosPedidos, updateStatus };
