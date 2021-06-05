const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../../../middlewares/validation");
const checkRelation = require("../../../../middlewares/model_relation");
const pedidoController = require("../../../../controllers/pedido");

const router = express.Router();

const createPedidoSchema = {
  idCarrinho: {
    in: ["body"],
    errorMessage: "Id do carrinho inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
};

router.post(
  "/",
  validate([checkSchema(createPedidoSchema)]),
  checkRelation((req) => {
    return req.cliente.carrinhos.some((c) => c.id === req.params.idCarrinho);
  }),
  pedidoController.create
);

const listPedidoSchema = {
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
  pedidoController.listPedidoCliente
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
  checkRelation((req) => {
    return req.cliente.pedidos.some((p) => p.id === req.params.id);
  }),
  pedidoController.get
);

module.exports = router;
