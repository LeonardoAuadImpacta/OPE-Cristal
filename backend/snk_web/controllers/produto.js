const ProdutoModel = require("../models/Produto");
const { sanitizeQuery } = require("../lib/database/util");

const create = (req, res, next) => {
  return ProdutoModel.create(req.params)
    .then((produto) => {
      res.status(201).json(produto);
    })
    .catch((reason) => {
      console.log(reason);
      res.status(400).json({
        error: "Falha ao criar produto.",
        details: [{ exception: reason }],
      });
    });
};

const update = (req, res, next) => {
  console.log(req.params);
  return ProdutoModel.update(req.params, {
    where: {
      id: req.params.id,
    },
  })
    .then((produto) => {
      res.status(201).json(produto);
    })
    .catch((reason) => {
      console.log(reason);
      res.status(400).json({
        error: "Falha ao atualizar produto.",
        details: [{ exception: reason }],
      });
    });
};

const list = async (req, res, next) => {
  const pagina = req.params._pagina || 1;
  const itens = req.params._itens || 10;
  const offset = pagina * itens <= itens ? 0 : (pagina - 1) * itens;

  return ProdutoModel.findAll({
    offset: offset,
    limit: itens,
  })
    .then((produtos) => {
      return res.status(200).json(produtos);
    })
    .catch((reason) => {
      console.log(reason);
      return res.status(400).json({ error: "Falha ao listar produtos" });
    });
};

const get = async (req, res, next) => {
  const produto = await ProdutoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (produto) {
    return res.status(200).json(produto);
  } else {
    return res.status(404).json();
  }
};

const deleteProduto = async (req, res, next) => {
  await ProdutoModel.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.status(204).json();
};

module.exports = {
  create,
  list,
  get,
  update,
  deleteProduto,
};
