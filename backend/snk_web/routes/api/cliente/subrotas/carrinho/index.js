const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../../../../middlewares/validation");
const checkRelation = require("../../../../../middlewares/model_relation");

const carrinhoController = require("../../../../../controllers/carrinho");
const pagamentoRoutes = require("./mercado_pago");
const itemCarrinhoRoutes = require("./item_carrinho");

const router = express.Router();

const findOrCreateCarrinhoSchema = {
  idEndereco: {
    in: ["body"],
    errorMessage: "Id do endereço inválido",
    isInt: {
      errorMessage: "Id do endereço precisa ser numérico",
    },
    optional: { options: { nullable: true } },
  },
  desconto: {
    in: ["body"],
    errorMessage: "Desconto inválido",
    isDecimal: {
      errorMessage: "Desconto deve ser decimal",
    },
    optional: { options: { nullable: true } },
  },
};

router.post(
  "/",
  validate([checkSchema(findOrCreateCarrinhoSchema)]),
  checkRelation((req) => {
    return req.cliente.enderecos.some((c) => c.id === req.params.idEndereco);
  }),
  carrinhoController.findOrCreate
);

const selecionarEnderecoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id do carrinho inválido",
    isInt: true,
    toInt: true,
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
  "/:id/endereco",
  validate([checkSchema(selecionarEnderecoSchema)]),
  checkRelation(
    (req) =>
      req.cliente.carrinhos.some((c) => c.id === req.params.id) &&
      req.cliente.enderecos.some((e) => e.id === req.params.idEndereco)
  ),
  carrinhoController.selecionarEndereco
);

router.get("/", carrinhoController.list);

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
  checkRelation((req) => {
    return req.cliente.carrinhos.some((c) => c.id === req.params.id);
  }),
  carrinhoController.get
);

// Sub-rotas
const subRotaSchema = {
  idCarrinho: {
    in: ["params"],
    errorMessage: "Id do carrinho inválido",
    isInt: true,
    toInt: true,
  },
};

router.use(
  "/:idCarrinho/item_carrinho",
  validate([checkSchema(subRotaSchema)]),
  checkRelation((req) => {
    return req.cliente.carrinhos.some(
      (c) => Number(c.id) === Number(req.params.idCarrinho)
    );
  }),
  itemCarrinhoRoutes
);

router.use(
  "/:idCarrinho/transacao",
  validate([checkSchema(subRotaSchema)]),
  checkRelation((req) => {
    return req.cliente.carrinhos.some(
      (c) => Number(c.id) === Number(req.params.idCarrinho)
    );
  }),
  pagamentoRoutes
);

module.exports = router;
