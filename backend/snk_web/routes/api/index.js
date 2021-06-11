var express = require("express");
var router = express.Router();

var pjson = require("../../package.json");

const auth = require("../../middlewares/auth");
const loginRoutes = require("./login");
const clienteRoutes = require("./cliente");
const produtoRoutes = require("./produto");
const carrinhoRoutes = require("./carrinho");
const enderecoRoutes = require("./endereco");
const pedidoRoutes = require("./pedido");
const itemCarrinhoRoutes = require("./item_carrinho");
const mercadoPagoRoutes = require("./mercado_pago");
const adminRoutes = require("./admin");

router.get("/", function (req, res, next) {
  res.json({ version: pjson.version });
});

// Unauthenticated endpoints
router.use("/login", loginRoutes);

// Partially authenticated endpoints
router.use("/produto", produtoRoutes);
router.use("/cliente", clienteRoutes);

// Authenticated endpoints
router.use("/admin", adminRoutes);
// DEPRECATED: usar subrotas de /cliente/:id
router.use("/carrinho", carrinhoRoutes);
router.use("/endereco", enderecoRoutes);
router.use("/pedido", pedidoRoutes);
router.use("/item_carrinho", itemCarrinhoRoutes);
router.use("/transacao", mercadoPagoRoutes);

module.exports = router;
