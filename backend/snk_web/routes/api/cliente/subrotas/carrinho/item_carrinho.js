const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../../../../middlewares/validation");
const itemCarrinhoController = require("../../../../../controllers/item_carrinho");

const router = express.Router();

const incrementOrCreateItemCarrinhoSchema = {
  idProduto: {
    in: ["body"],
    errorMessage: "Id do produto inválido",
    isEmpty: {
      negated: true,
      errorMessage: "Id do produto é obrigatório",
    },
    isInt: {
      errorMessage: "Id do produto deve ser numérico",
    },
  },
  quantidade: {
    in: ["body"],
    errorMessage: "Quantidade inválida",
    isEmpty: {
      negated: true,
      errorMessage: "Quantidade é um campo obrigatório",
    },
    toInt: {
      errorMessage: "Quantidade deve ser numérico",
    },
  },
};

router.post(
  "/",
  validate([checkSchema(incrementOrCreateItemCarrinhoSchema)]),
  itemCarrinhoController.incrementOrCreate
);

const decrementOrDeleteItemCarrinhoSchema = {
  idProduto: {
    in: ["body"],
    errorMessage: "Id do produto inválido",
    isEmpty: {
      negated: true,
      errorMessage: "Id do produto é obrigatório",
    },
    isInt: {
      errorMessage: "Id do produto deve ser numérico",
    },
  },
  quantidade: {
    in: ["body"],
    errorMessage: "Quantidade inválida",
    isEmpty: {
      negated: true,
      errorMessage: "Quantidade é um campo obrigatório",
    },
    toInt: {
      errorMessage: "Quantidade deve ser numérico",
    },
  },
};

router.delete(
  "/",
  validate([checkSchema(decrementOrDeleteItemCarrinhoSchema)]),
  itemCarrinhoController.decrementOrDelete
);

const listItemCarrinhoSchema = {
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
  validate([checkSchema(listItemCarrinhoSchema)]),
  itemCarrinhoController.list
);

const getItemCarrinhoSchema = {
  id: {
    in: ["params"],
    errorMessage: "id do item do pedido inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  validate([checkSchema(getItemCarrinhoSchema)]),
  itemCarrinhoController.get
);

module.exports = router;
