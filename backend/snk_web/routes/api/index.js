var express = require("express");
var router = express.Router();

const loginRoutes = require("./login");
const clienteRoutes = require("./cliente");
const produtoRoutes = require("./produto");
const carrinhoRoutes = require("./carrinho");
const enderecoRoutes = require("./endereco");
const pedidoRoutes = require("./pedido");
const itemCarrinhoRoutes = require("./item_carrinho");
const mercadoPagoRoutes = require("./mercado_pago");

router.get("/", function (req, res, next) {
  res.json({ version: "v1.0.0" });
});

// Unauthenticated endpoints
router.use("/login", loginRoutes);

// Authenticated endpoints
router.use("/cliente", clienteRoutes);
router.use("/produto", produtoRoutes);
router.use("/carrinho", carrinhoRoutes);
router.use("/endereco", enderecoRoutes);
router.use("/pedido", pedidoRoutes);
router.use("/item_carrinho", itemCarrinhoRoutes);
router.use("/transacao", mercadoPagoRoutes)

module.exports = router;
