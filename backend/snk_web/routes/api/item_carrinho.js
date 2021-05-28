const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const itemCarrinhoController = require("../../controllers/item_carrinho");

const router = express.Router();

const incrementOrCreateItemCarrinhoSchema = {
  idCarrinho: {
    in: ["params"],
    errorMessage: "Id do carrinho inválido",
    isEmpty: {
      negated: true,
      errorMessage: "Id do carrinho é obrigatório",
    },
    isInt: {
      errorMessage: "Id do carrinho deve ser numérico",
    },
  },
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
  // precoVenda será calculado direto no controller
  //precoVenda: {
  //in: ["body"],
  //errorMessage: "Preço inválido",
  //isEmpty: {
  //negated: true,
  //errorMessage: "Preço é obrigatório"
  //},
  //isDecimal: true,
  //},
};

router.post(
  "/carrinho/:idCarrinho",
  validate([checkSchema(incrementOrCreateItemCarrinhoSchema)]),
  itemCarrinhoController.incrementOrCreate
);

const decrementOrDeleteItemCarrinhoSchema = {
  idCarrinho: {
    in: ["params"],
    errorMessage: "Id do carrinho inválido",
    isEmpty: {
      negated: true,
      errorMessage: "Id do carrinho é obrigatório",
    },
    isInt: {
      errorMessage: "Id do carrinho deve ser numérico",
    },
  },
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
  "/carrinho/:idCarrinho",
  validate([checkSchema(decrementOrDeleteItemCarrinhoSchema)]),
  itemCarrinhoController.decrementOrDelete
);

const listItemCarrinhoSchema = {
  idCarrinho: {
    in: ["query"],
    isInt: {
      errorMessage: "Id do carrinho deve ser numérico",
    },
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
