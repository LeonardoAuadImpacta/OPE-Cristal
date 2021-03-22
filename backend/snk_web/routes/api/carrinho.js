const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const carrinhoController = require("../../controllers/carrinho");

const router = express.Router();

const createCarrinhoSchema = {
  idCliente: {
    in: ["body"],
    errorMessage: "Id do cliente inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
  idEndereco: {
    in: ["body"],
    errorMessage: "Id do endereço inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
  status: {
    in: ["body"],
    errorMessage: "Status inválido",
    isEmpty: { negated: true },
    isIn: {
      options: [["OPEN", "SUCCESS", "CANCELED", "EXPIRED"]],
    },
  },
  desconto: {
    in: ["body"],
    errorMessage: "Desconto inválido",
    isDecimal: true,
  },
  // Cálculado no controller
  //dataExpiracao: {
  //in: ["body"],
  //errorMessage: "Data de expiração inválida",
  //isDate: true,
  //},
};

router.post(
  "/",
  validate([checkSchema(createCarrinhoSchema)]),
  carrinhoController.create
);

const getCarrinhoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id do carrinho inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  validate([checkSchema(getCarrinhoSchema)]),
  carrinhoController.get
);

module.exports = router;
