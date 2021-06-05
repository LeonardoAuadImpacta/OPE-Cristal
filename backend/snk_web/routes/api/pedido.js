const express = require("express");
const { checkSchema } = require("express-validator");

const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validation");
const pedidoController = require("../../controllers/pedido");

const router = express.Router();

const listPedidoSchema = {
  _pagina: {
    in: ["query"],
    errorMessage: "Número da página inválido",
    toInt: true,
  },
  _itens: {
    in: ["query"],
    errorMessage: "Limite de items por página inválido",
    toInt: true,
  },
};

router.get(
  "/",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(listPedidoSchema)]),
  pedidoController.listAll
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
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(getPedidoSchema)]),
  pedidoController.get
);

router.get(
  "/:id/context",
  auth.verifyJWT,
  validate([checkSchema(getPedidoSchema)]),
  pedidoController.getContext
);

const updateStatusSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id do pedido inválido",
    isInt: true,
    toInt: true,
  },
  status: {
    in: ["body"],
    errorMessage: "Status inválido",
    isEmpty: { negated: true },
    isIn: {
      options: [
        [
          "COMPLETED",
          "CANCELED",
          "AWAITING_PAYMENT",
          "CONFIRMED",
          "DISPATCHED",
          "IN_TRANSIT",
        ],
      ],
    },
  },
};

router.put(
  "/:id/status",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(updateStatusSchema)]),
  pedidoController.updateStatus
);

module.exports = router;
