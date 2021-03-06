const express = require("express");
const router = express.Router();
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const loginController = require("../../controllers/login");

// TODO: adicionar custom validations pra checar credenciais com base nas entidades
const doLoginSchema = {
  email: {
    in: ["body"],
    errorMessage: "E-mail inválido",
    isEmail: true,
    normalizeEmail: true,
  },
  password: {
    in: ["body"],
    isLength: {
      errorMessage: "Senha deve possuir no mínimo 8 caracteres",
      options: { min: 8 },
    },
  },
};

router.post("/", validate([checkSchema(doLoginSchema)]), loginController);

module.exports = router;
