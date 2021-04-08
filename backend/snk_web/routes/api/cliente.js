const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const clienteController = require("../../controllers/cliente");

const router = express.Router();

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
  pseudonimo: {
    in: ["body"],
    errorMessage: "Pseudônimo inválido",
    isEmpty: { negated: true },
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

const getClienteSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id de cliente inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  validate([checkSchema(getClienteSchema)]),
  clienteController.get
);

module.exports = router;
