const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const clienteController = require("../../controllers/cliente");

const createClienteSchema = {
  nome: {
    in: ["body"],
    errorMessage: "Nome inválido",
    isEmpty: { negated: true },
  },
  sobrenome: {
    in: ["body"],
    errorMessage: "Sobrenome inválido",
    isEmpty: { negated: true },
  },
  data_nascimento: {
    in: ["body"],
    errorMessage: "Data de nascimento inválida",
    isDate: true,
    toDate: true,
  },
  email: {
    in: ["body"],
    errorMessage: "E-mail inválido",
    isEmail: true,
    normalizeEmail: true,
  },
  senha: {
    in: ["body"],
    errorMessage: "Senha inválida",
    isLength: {
      errorMessage: "Senha deve possuir no mínimo 8 caracteres",
      options: { min: 8 },
    },
  },
  genero: {
    in: ["body"],
    errorMessage: "Gênero inválido",
    isEmpty: { negated: true },
  },
  endereco_rua: {
    in: ["body"],
    isEmpty: { negated: true },
  },
  endereco_numero: {
    in: ["body"],
    isEmpty: { negated: true },
  },
  endereco_complemento: {
    in: ["body"],
  },
  telefone: {
    in: ["body"],
    isEmpty: { negated: true },
  },
};

router.post(
  "/",
  validate([checkSchema(createClienteSchema)]),
  clienteController.create
);

router.get("/:id", clienteController.get);

module.exports = router;
