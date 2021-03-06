const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const customerController = require("../../controllers/customer");

const createCustomerSchema = {
  firstName: {
    in: ["body"],
    errorMessage: "Nome inválido",
    isEmpty: { negated: true },
  },
  lastName: {
    in: ["body"],
    errorMessage: "Sobrenome inválido",
    isEmpty: { negated: true },
  },
  birthdate:{
    in: ["body"],
    errorMessage: "Data de nascimento inválida",
    isDate: true,
    toDate: true
  },
  email: {
    in: ["body"],
    errorMessage: "E-mail inválido",
    isEmail: true,
    normalizeEmail: true,
  },
  password: {
    in: ["body"],
    errorMessage: "Senha inválida",
    isLength: {
      errorMessage: "Senha deve possuir no mínimo 8 caracteres",
      options: { min: 8 },
    },
  },
  gender: {
    in: ["body"],
    errorMessage: "Gênero inválido",
    isEmpty: { negated: true },
  },
};

router.post(
  "/",
  validate([checkSchema(createCustomerSchema)]),
  customerController
);

module.exports = router;
