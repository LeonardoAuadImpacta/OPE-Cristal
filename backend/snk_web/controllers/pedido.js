const PedidoModel = require("../models/Pedido");

const create = (req, res, next) => {
    return PedidoModel.create(req.body)
      .then(() => {
          res.status(201).json();
      })
      .catch((reason) => {
          res.status(400).json();
      });
};

const get = async (req, res, next) => {
    const pedido = await PedidoModel.findOne({
        where: {
            id: req.params.id,
        },
    });

    return res.status(200).json(pedido);
};

module.exports = {
    create,
    get,
};