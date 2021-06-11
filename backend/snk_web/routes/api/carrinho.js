const express = require("express");
const { checkSchema } = require("express-validator");

const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validation");
const carrinhoController = require("../../controllers/carrinho");

const router = express.Router();

const findOrCreateCarrinhoSchema = {
  idCliente: {
    in: ["body"],
    errorMessage: "Id do cliente inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
  idEndereco: {
    in: ["body"],
    errorMessage: "Id do endereço inválido",
    isInt: {
      errorMessage: "Id do endereço precisa ser numérico",
    },
    optional: { options: { nullable: true } },
  },
  // valor padrão "OPEN" definido no controller
  //status: {
  //in: ["body"],
  //errorMessage: "Status inválido",
  //isEmpty: { negated: true },
  //isIn: {
  //options: [["OPEN", "SUCCESS", "CANCELED", "EXPIRED"]],
  //},
  //},
  desconto: {
    in: ["body"],
    errorMessage: "Desconto inválido",
    isDecimal: {
      errorMessage: "Desconto deve ser decimal",
    },
    optional: { options: { nullable: true } },
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
  validate([checkSchema(findOrCreateCarrinhoSchema)]),
  carrinhoController.findOrCreate
);

const selecionarEnderecoSchema = {
  idCarrinho: {
    in: ["body"],
    errorMessage: "Id do carrinho inválido",
    isEmpty: { negated: true },
    isInt: true,
  },
  idEndereco: {
    in: ["body"],
    errorMessage: "Id do endereço inválido",
    isInt: {
      errorMessage: "Id do endereço precisa ser numérico",
    },
    isEmpty: { negated: true },
  },
};

router.post(
  "/endereco",
  validate([checkSchema(selecionarEnderecoSchema)]),
  carrinhoController.selecionarEndereco
);

const listCarrinhoSchema = {
  idCliente: {
    in: ["query"],
    errorMessage: "Id do cliente inválido",
    isInt: true,
  },
};

router.get(
  "/",
  validate([checkSchema(listCarrinhoSchema)]),
  auth.authorized("CUSTOMER/<idCliente>"),
  carrinhoController.list
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
