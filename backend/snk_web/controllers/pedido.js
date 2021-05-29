const { sanitizeQuery } = require("../lib/database/util");
const PedidoModel = require("../models/Pedido");
const CarrinhoModel = require("../models/Carrinho");

const create = (req, res, next) => {
  const idCarrinho = req.params.idCarrinho;
  const statusPadrao = "AWAITING_PAYMENT";

  return PedidoModel.findOrCreate({
    where: req.params,
    defaults: {
      status: statusPadrao,
    },
  })
    .then(([pedido, created]) => {
      if (created) {
        CarrinhoModel.update(
          {
            status: "SUCCESS",
          },
          {
            where: {
              id: idCarrinho,
            },
          }
        )
          .then(() => {
            return res.status(201).json();
          })
          .catch((err) => {
            console.log(err);
            return res.status(400).json({ error: "Falha ao criar pedido" });
          });
      } else {
        return res.status(200).json();
      }
    })
    .catch((reason) => {
      res.status(400).json({ error: "Falha ao criar pedido" });
    });
};

const list = async (req, res, next) => {
  const idCliente = req.cliente.id;
  const pagina = req.params._pagina || 1;
  const items = req.params._items || 10;
  const offset = pagina * items <= items ? 0 : (pagina - 1) * items;

  return PedidoModel.findAll({
    where: {
      idCliente,
    },
    offset: offset,
    limit: items,
  })
    .then((pedidos) => {
      return res.status(200).json(pedidos);
    })
    .catch((reason) => {
      console.log(reason);
      return res.status(400).json({ error: "Falha ao listar pedidos" });
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
  list,
  get,
};
