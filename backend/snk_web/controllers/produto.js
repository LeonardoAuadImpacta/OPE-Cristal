const ProdutoModel = require("../models/Produto");
const { sanitizeQuery } = require("../lib/database/util");

const create = (req, res, next) => {
  return ProdutoModel.create(req.body)
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      // TODO: treat possible reasons and add as "error" on response json
      res.status(400).json();
    });
};

const update = (req, res, next) => {
  return ProdutoModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      // TODO: treat possible reasons and add as "error" on response json
      res.status(400).json();
    });
};

const list = async (req, res, next) => {
  const pagina = req.params._pagina || 1;
  const items = req.params._items || 10;
  const offset = pagina * items <= items ? 0 : (pagina - 1) * items;

  return ProdutoModel.findAll({
    where: {
      ...sanitizeQuery(req.params),
    },
    offset: offset,
    limit: items,
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
