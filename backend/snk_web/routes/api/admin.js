const express = require("express");
const { checkSchema } = require("express-validator");

const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validation");

const clienteController = require("../../controllers/cliente");
const adminController = require("../../controllers/admin");

const router = express.Router();

const createAdminSchema = {
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
  imgProfile: {
    in: ["body"],
    isEmpty: { negated: true },
  },
};

router.post(
  "/",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(createAdminSchema)]),
  adminController.create
);

const updateAdminSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id de cliente inválido",
    isInt: true,
    toInt: true,
  },
  nome: {
    in: ["body"],
    errorMessage: "Nome inválido",
  },
  sobrenome: {
    in: ["body"],
    errorMessage: "Sobrenome inválido",
  },
  pseudonimo: {
    in: ["body"],
    errorMessage: "Pseudônimo inválido",
  },
  email: {
    in: ["body"],
    errorMessage: "E-mail inválido",
    optional: true,
    isEmail: true,
    normalizeEmail: true,
  },
  senha: {
    in: ["body"],
    errorMessage: "Senha inválida",
    optional: true,
    isLength: {
      errorMessage: "Senha deve possuir no mínimo 8 caracteres",
      options: { min: 8 },
    },
  },
  telefone: {
    in: ["body"],
  },
  imgProfile: {
    in: ["body"],
  },
};

router.patch(
  "/:id",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(updateAdminSchema)]),
  adminController.update
);

const deleteAdminSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id inválido",
    isInt: true,
    toInt: true,
  },
};

router.delete(
  "/:id",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(deleteAdminSchema)]),
  adminController._delete
);

const listAdminSchema = {
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
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(listAdminSchema)]),
  adminController.list
);

module.exports = router;
