const express = require("express");
const { checkSchema } = require("express-validator");

const validate = require("../../middlewares/validation");
const itemCarrinhoController = require("../../controllers/item_carrinho");

const router = express.Router();

const createItemCarrinhoSchema = {
    idCarrinho: {
        in: ["body"],
        errorMessage: "Id do carrinho inválido",
        isEmpty: { negated: true },
        isInt: true,
    },
    idProduto: {
        in: ["body"],
        errorMessage: "Id do produto inválido",
        isEmpty: { negated: true },
        isInt: true,
    },
    quantidade: {
        in: ["body"],
        errorMessage: "Quantidade inválida",
        isEmpty: { negated: true },
        isInt: true,
    },
    precoVenda: {
        in: ["body"],
        errorMessage: "Preço inválido",
        isEmpty: { negated: true },
        isDecimal: true,
    },
};

router.post(
    "/",
    validate([checkSchema(createItemCarrinhoSchema)]),
    itemCarrinhoController.create
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