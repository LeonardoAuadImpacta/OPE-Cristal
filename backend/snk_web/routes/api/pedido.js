const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const pedidoController = require("../../controllers/pedido");

const router = express.Router();

const createPedidoSchema = {
  idCliente: {
    in: ["body"],
    errorMessage: "Id do cliente inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
  idCarrinho: {
    in: ["body"],
    errorMessage: "Id do carrinho inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
  // Status padrão é utilizado no controller
  //status: {
    //in: ["body"],
    //errorMessage: "Status inválido",
    //isEmpty: { negated: true },
    //isIn: {
      //options: [
        //[
          //"COMPLETED",
          //"CANCELED",
          //"AWAITING_PAYMENT",
          //"CONFIRMED",
          //"DISPATCHED",
          //"IN_TRANSIT",
        //],
      //],
    //},
  //},
};

router.post(
  "/",
  validate([checkSchema(createPedidoSchema)]),
  pedidoController.create
);

const listPedidoSchema = {
  id: {
    in: ["query"],
  },
  idCliente: {
    in: ["query"],
  },
  _pagina: {
    in: ["query"],
    errorMessage: "Número da página inválido",
    toInt: true,
  },
  _items: {
    in: ["query"],
    errorMessage: "Limite de items por página inválido",
    toInt: true,
  },
};

router.get(
  "/",
  validate([checkSchema(listPedidoSchema)]),
  pedidoController.list
);

const getPedidoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id do pedido inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  validate([checkSchema(getPedidoSchema)]),
  pedidoController.get
);

module.exports = router;
