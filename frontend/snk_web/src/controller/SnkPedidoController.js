import { createPedido as _createPedido } from "../service/PedidoService";

const createPedido = async ({ idCliente, idCarrinho }, view) => {
  return _createPedido({ idCliente, idCarrinho })
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        view.$store.dispatch("setCarrinho", { idCliente });
        view.dialog = true;
      } else {
        console.log(res);
        view.flagAlert("Error");
      }
    })
    .catch(err => {
      console.log(err);
      view.flagAlert(err.response.data.error);
    });
};

export { createPedido };
