var express = require("express");
var router = express.Router();

const carrinhoRoutes = require("./carrinho");
const enderecoRoutes = require("./endereco");
const pedidoRoutes = require("./pedido");

router.use("/carrinho", carrinhoRoutes);
router.use("/endereco", enderecoRoutes);
router.use("/pedido", pedidoRoutes);

module.exports = router;
