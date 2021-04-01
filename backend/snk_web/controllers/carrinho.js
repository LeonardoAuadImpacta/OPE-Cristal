const moment = require("moment");
const { sanitizeQuery } = require("../lib/database/util");
const CarrinhoModel = require("../models/Carrinho");

function calcularDataExpiracao() {
  const agora = moment();
  const dataExpiracao = agora.add(3, "days").format();
  return dataExpiracao;
}

const findOrCreate = async (req, res, next) => {
  const dataExpiracao = calcularDataExpiracao();
  const statusPadrao = "OPEN";
  const idCliente = req.body.idCliente;
  const idEndereco = req.body.idEndereco;

  return CarrinhoModel.findOrCreate({
    where: {
      idCliente,
      status: statusPadrao,
    },
    defaults: {
      dataExpiracao,
      idEndereco,
    },
  })
    .then(([carrinho, created]) => {
      if (created) {
        res.status(201).json(carrinho);
      } else {
        res.status(200).json(carrinho);
      }
    })
    .catch((reason) => {
      console.log(reason);
      res.status(400).json({ error: "Falha ao tentar criar carrinho" });
    });
};

const list = async (req, res, next) => {
  const OPEN_STATUS = "OPEN";

  return CarrinhoModel.findAll({
    where: {
      status: OPEN_STATUS,
      ...sanitizeQuery(req.params),
    },
  })
    .then((carrinho) => {
      return res.status(200).json(carrinho);
    })
    .catch((reason) => {
      console.log(reason);
      return res
        .status(400)
        .json({ error: "Falha ao tentar listar carrinhos" });
    });
};

const get = async (req, res, next) => {
  const carrinho = await CarrinhoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(carrinho);
};

module.exports = {
  findOrCreate,
  list,
  get,
};
