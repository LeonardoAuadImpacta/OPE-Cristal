const moment = require("moment");
const { sanitizeQuery } = require("../lib/database/util");
const CarrinhoModel = require("../models/Carrinho");
const ItemCarrinhoModel = require("../models/ItemCarrinho");

function calcularDataExpiracao() {
  const agora = moment();
  const dataExpiracao = agora.add(3, "days").format();
  return dataExpiracao;
}

const findOrCreate = async (req, res, next) => {
  const dataExpiracao = calcularDataExpiracao();
  const statusPadrao = "OPEN";
  const idCliente = req.cliente.id;
  const idEndereco = req.params.idEndereco;

  return CarrinhoModel.findOrCreate({
    where: {
      idCliente,
      status: statusPadrao,
    },
    defaults: {
      dataExpiracao,
      idEndereco,
    },
    include: [{ model: ItemCarrinhoModel, as: "itens" }],
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
  const idCliente = req.cliente.id;

  return CarrinhoModel.findAll({
    where: {
      idCliente,
    },
    include: [{ model: ItemCarrinhoModel, as: "itens" }],
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

const selecionarEndereco = async (req, res, next) => {
  const idCarrinho = req.params.id;
  const idEndereco = req.params.idEndereco;

  return CarrinhoModel.update(
    {
      idEndereco,
    },
    {
      where: {
        id: idCarrinho,
      },
    }
  )
    .then(([carrinho, created]) => {
      if (created) {
        res.status(201).json(carrinho);
      } else {
        res.status(200).json(carrinho);
      }
    })
    .catch((reason) => {
      console.log(reason);
      res.status(400).json({ error: "Falha ao tentar atualizar carrinho" });
    });
};

module.exports = {
  findOrCreate,
  list,
  get,
  selecionarEndereco,
};
