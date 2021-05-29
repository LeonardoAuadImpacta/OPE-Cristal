const CarrinhoModel = require("../models/Carrinho");
const ProdutoModel = require("../models/Produto");
const ItemCarrinhoModel = require("../models/ItemCarrinho");

const incrementOrCreate = async (req, res, next) => {
  try {
    const carrinho = await CarrinhoModel.findOne({
      where: {
        id: req.params.idCarrinho,
      },
    });
    if (!carrinho)
      return res.status(400).json({ error: "Carrinho não encontrado" });

    const produto = await ProdutoModel.findOne({
      where: {
        id: req.params.idProduto,
      },
    });
    if (!produto)
      return res.status(400).json({ error: "Produto não encontrado" });

    const { idCarrinho, idProduto, quantidade } = req.params;
    const precoVenda = produto.precoAtual;

    return ItemCarrinhoModel.findOrCreate({
      where: {
        idCarrinho,
        idProduto,
      },
      defaults: {
        quantidade,
        precoVenda,
      },
    })
      .then(([item_carrinho, created]) => {
        if (created) {
          res.status(201).json(item_carrinho);
        } else {
          item_carrinho.increment("quantidade", { by: quantidade });
          item_carrinho.reload().then((item_carrinho) => {
            res.status(200).json(item_carrinho);
          });
        }
      })
      .catch((reason) => {
        console.log(reason);
        res.status(400).json({});
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json();
  }
};

const decrementOrDelete = async (req, res, next) => {
  try {
    const carrinho = await CarrinhoModel.findOne({
      where: {
        id: req.params.idCarrinho,
      },
    });
    if (!carrinho)
      return res.status(400).json({ error: "Carrinho não encontrado" });

    const produto = await ProdutoModel.findOne({
      where: {
        id: req.params.idProduto,
      },
    });
    if (!produto)
      return res.status(400).json({ error: "Produto não encontrado" });

    const { idCarrinho, idProduto, quantidade } = req.params;

    return ItemCarrinhoModel.findOne({
      where: {
        idCarrinho,
        idProduto,
      },
    })
      .then((item_carrinho) => {
        if (item_carrinho.quantidade <= 1) {
          item_carrinho.destroy();
          return res.status(200).json({});
        } else {
          item_carrinho.decrement("quantidade", { by: quantidade });
          item_carrinho.reload().then((item_carrinho) => {
            res.status(200).json(item_carrinho);
          });
        }
      })
      .catch((reason) => {
        console.log(reason);
        res.status(400).json({});
      });
  } catch (e) {
    console.log(e);
    return res.status(500).json();
  }
};

const list = async (req, res, next) => {
  const item_carrinhos = await ItemCarrinhoModel.findAll({
    where: {
      idCarrinho: req.params.idCarrinho,
    },
    include: ProdutoModel,
  });

  return res.status(200).json(item_carrinhos);
};

const get = async (req, res, next) => {
  const item_carrinho = await ItemCarrinhoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(item_carrinho);
};

module.exports = {
  incrementOrCreate,
  decrementOrDelete,
  list,
  get,
};
