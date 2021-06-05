const express = require("express");
const { checkSchema } = require("express-validator");

const auth = require("../../middlewares/auth");
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
  urlImage: {
    in: ["body"],
    errorMessage: "URL da imagem inválida",
    isEmpty: { negated: true },
  },
  categoria: {
    in: ["body"],
    errorMessage: "Categoria inválida",
    isIn: {
      options: [
        ["Corrida", "Skateboarding", "Academia", "Sportwear", "Acessórios"],
      ],
    },
  },
};

router.post(
  "/",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(createProdutoSchema)]),
  produtoController.create
);

const getProdutoSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id de produto inválido",
    isInt: true,
    toInt: true,
  },
};

router.put(
  "/:id",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(createProdutoSchema), checkSchema(getProdutoSchema)]),
  produtoController.update
);

const listProdutoSchema = {
  _pagina: {
    in: ["query"],
    errorMessage: "Número da página inválido",
    toInt: true,
  },
  _itens: {
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
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(getProdutoSchema)]),
  produtoController.deleteProduto
);

module.exports = router;
