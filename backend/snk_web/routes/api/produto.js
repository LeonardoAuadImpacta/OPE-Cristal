const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const produtoController = require("../../controllers/produto");

const router = express.Router();

const createProdutoSchema = {
  nome: {
    in: ["body"],
    errorMessage: "Nome inválido",
    isEmpty: { negated: true },
  },
  subtitulo: {
    in: ["body"],
    errorMessage: "Subtítulo inválido",
    isEmpty: { negated: true },
  },
  descricao: {
    in: ["body"],
    errorMessage: "Descrição inválida",
  },
  precoAtual: {
    in: ["body"],
    errorMessage: "Preço inválido",
    isEmpty: { negated: true },
    isDecimal: {
      errorMessage: "Preço deve ser um valor decimal",
    },
  },
};

const getProdutoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id de produto inválido",
    isInt: true,
    toInt: true,
  },
};

router.post(
  "/",
  validate([checkSchema(createProdutoSchema)]),
  produtoController.create
);

router.put(
  "/:id",
  validate([checkSchema(createProdutoSchema),checkSchema(getProdutoSchema)]),
  produtoController.update
);

const listProdutoSchema = {
  id: {
    in: ["query"],
  },
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
  validate([checkSchema(listProdutoSchema)]),
  produtoController.list
);

router.get(
  "/:id",
  validate([checkSchema(getProdutoSchema)]),
  produtoController.get
);
router.delete(
  "/:id",
  validate([checkSchema(getProdutoSchema)]),
  produtoController.deleteProduto
);

module.exports = router;
