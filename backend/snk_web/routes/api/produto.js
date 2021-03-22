const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const produtoController = require("../../controllers/produto");

const router = express.Router();

const listProdutoSchema = {
  pagina: {
    in: ["query"],
    errorMessage: "Número da página inválido",
    toInt: true,
  },
  items: {
    in: ["query"],
    errorMessage: "Limite de items por página inválido",
    toInt: true,
  },
};

router.get(
  "/",
  validate([checkSchema(listProdutoSchema)]),
  produtoController.list
);

const getProdutoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id de produto inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  validate([checkSchema(getProdutoSchema)]),
  produtoController.get
);

module.exports = router;
