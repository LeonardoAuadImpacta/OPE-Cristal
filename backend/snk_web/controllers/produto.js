const ProdutoModel = require("../models/Produto");

const list = async (req, res, next) => {
  const pagina = req.query.pagina || 1;
  const items = req.query.items || 10;
  const offset = pagina * items <= items ? 0 : (pagina - 1) * items;

  const produtos = await ProdutoModel.findAll({
    offset: offset,
    limit: items,
  });

  return res.status(200).json(produtos);
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

module.exports = {
  list,
  get,
};
