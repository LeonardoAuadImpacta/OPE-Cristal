const { sanitizeQuery } = require("../lib/database/util");
const EnderecoModel = require("../models/Endereco");

const create = (req, res, next) => {
  return EnderecoModel.create(req.params)
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      res.status(400).json();
    });
};

const update = (req, res, next) => {
  return EnderecoModel.update(req.params, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      res.status(400).json();
    });
};

const list = async (req, res, next) => {
  const idCliente = req.cliente.id;
  const fields = Object.keys(EnderecoModel.rawAttributes);
  return EnderecoModel.findAll({
    where: {
      idCliente,
      ...sanitizeQuery(fields, req.params),
    },
  })
    .then((enderecos) => {
      return res.status(200).json(enderecos);
    })
    .catch((reason) => {
      console.log(reason);
      return res
        .status(400)
        .json({ error: "Falha ao tentar listar endereços" });
    });
};

const get = async (req, res, next) => {
  const endereco = await EnderecoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(endereco);
};

const deletar = async (req, res, next) => {
  const endereco = await EnderecoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  await endereco.destroy();

  return res.status(200).json(endereco);
};
module.exports = {
  create,
  list,
  get,
  update,
  deletar,
};
