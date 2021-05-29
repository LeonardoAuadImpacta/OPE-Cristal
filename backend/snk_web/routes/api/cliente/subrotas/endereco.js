const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../../../middlewares/validation");
const checkRelation = require("../../../../middlewares/model_relation");
const enderecoController = require("../../../../controllers/endereco");
const EnderecoModel = require("../../../../models/Endereco");

const router = express.Router();

const createEnderecoSchema = {
  uf: {
    in: ["body"],
    errorMessage: "UF inválido",
    isEmpty: { negated: true },
  },
  cidade: {
    in: ["body"],
    errorMessage: "Cidade inválida",
    isEmpty: { negated: true },
  },
  bairro: {
    in: ["body"],
    errorMessage: "Bairro inválido",
    isEmpty: { negated: true },
  },
  rua: {
    in: ["body"],
    errorMessage: "Rua inválida",
    isEmpty: { negated: true },
  },
  numero: {
    in: ["body"],
    errorMessage: "Número inválido",
    isEmpty: { negated: true },
  },
  complemento: {
    in: ["body"],
    errorMessage: "Complemento inválido",
  },
  cep: {
    in: ["body"],
    errorMessage: "Cep inválido",
    isEmpty: { negated: true },
  },
};

router.post(
  "/",
  validate([checkSchema(createEnderecoSchema)]),
  enderecoController.create
);

router.get("/", enderecoController.list);

const getEnderecoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id do endereço inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  validate([checkSchema(getEnderecoSchema)]),
  checkRelation((req) => {
    return req.cliente.enderecos.some((e) => e.id === req.params.id);
  }),
  enderecoController.get
);

module.exports = router;
