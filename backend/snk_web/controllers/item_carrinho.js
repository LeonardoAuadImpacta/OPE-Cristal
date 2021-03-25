const ItemCarrinhoModel = require("../models/ItemCarrinho");

const create = (req, res, next) => {
    return ItemCarrinhoModel.create(req.body)
      .then(() => {
          res.status(201).json();
      })
      .catch((reason) => {
          res.status(400).json();
      });
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
    create,
    get,
};