const express = require("express");
const { checkSchema } = require("express-validator");

const auth = require("../../../middlewares/auth");
const validate = require("../../../middlewares/validation");

const subRoutes = require("./subrotas");

const ClienteModel = require("../../../models/Cliente");
const PedidoModel = require("../../../models/Pedido");
const CarrinhoModel = require("../../../models/Carrinho");
const EnderecoModel = require("../../../models/Endereco");
const clienteController = require("../../../controllers/cliente");

const router = express.Router();

const createClienteSchema = {
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
  validate([checkSchema(createClienteSchema)]),
  clienteController.create
);

const getClienteSchema = {
  id: {
    in: ["params"],
    errorMessage: "Id de cliente inválido",
    isInt: true,
    toInt: true,
  },
};

router.get(
  "/:id",
  auth.verifyJWT,
  auth.authorized("ADMIN"),
  validate([checkSchema(getClienteSchema)]),
  clienteController.get
);

// Sub-rotas
const subRotaSchema = {
  idCliente: {
    in: ["params"],
    errorMessage: "Id de cliente inválido",
    isInt: true,
    toInt: true,
  },
};

router.param("idCliente", async (req, res, next, id) => {
  const cliente = await ClienteModel.findOne({
    where: { id },
    include: [
      { model: PedidoModel, as: "pedidos" },
      { model: CarrinhoModel, as: "carrinhos" },
      { model: EnderecoModel, as: "enderecos" },
    ],
  });
  req.cliente = cliente;
  next();
});
router.use(
  "/:idCliente",
  auth.verifyJWT,
  validate([checkSchema(subRotaSchema)]),
  auth.authorized("CUSTOMER/<idCliente>"),
  subRoutes
);

module.exports = router;
