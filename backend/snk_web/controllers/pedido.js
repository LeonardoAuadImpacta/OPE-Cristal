const { sanitizeQuery } = require("../lib/database/util");
const PedidoModel = require("../models/Pedido");
const CarrinhoModel = require("../models/Carrinho");
const EnderecoModel = require("../models/Endereco");
const itemCarrinhoModel = require("../models/ItemCarrinho");
const ProdutoModel = require("../models/Produto");

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

const listPedidoCliente = async (req, res, next) => {
  const pagina = req.params._pagina || 1;
  const items = req.params._items || 10;
  const offset = pagina * items <= items ? 0 : (pagina - 1) * items;

  delete req.params.idCliente;
  const idCliente = req.cliente.id;
  const fields = Object.keys(PedidoModel.rawAttributes);
  try {
    const pedidos = await Promise.all(
      await PedidoModel.findAll({
        where: {
          idCliente,
          ...sanitizeQuery(fields, req.params),
        },
        offset: offset,
        limit: items,
      })
    );

    const response = await Promise.all(
      await pedidos.map(async (pedido) => ({
        pedido: pedido,
        produtos: await getProdutos(pedido.idCarrinho),
        endereco: await getEndereco(pedido.idCarrinho),
      }))
    );
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Falha ao listar pedidos" });
  }
};

const get = async (req, res, next) => {
  const pedido = await PedidoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(pedido);
};

const getContext = async (req, res, next) => {
  const pedido = await PedidoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  let response = {
    pedido: pedido,
    produtos: await getProdutos(pedido.idCarrinho),
    endereco: await getEndereco(pedido.idCarrinho),
  };

  return res.status(200).json(response);
};

const listAll = async (req, res, next) => {
  const pagina = (req.params._pagina > 0 && req.params._pagina) || 1;
  const itens = (req.params._itens > 0 && req.params._itens) || 10;
  const offset = pagina * itens <= itens ? 0 : (pagina - 1) * itens;

  const pedidos = await PedidoModel.findAll({
    offset: offset,
    limit: itens,
  });

  return res.status(200).json(pedidos);
};

const updateStatus = async (req, res, next) => {
  const pedido = await PedidoModel.findOne({ where: { id: req.params.id } });

  if (!pedido) return res.status(404).json({ error: "Pedido não encontrado" });

  Object.assign(pedido, { status: req.params.status });
  pedido.save();

  return res.status(200).json(pedido);
};

module.exports = {
  create,
  listPedidoCliente,
  listAll,
  get,
  getContext,
  updateStatus,
};

async function getProdutos(idCarrinho) {
  const itens = await Promise.all(
    await itemCarrinhoModel.findAll({
      where: {
        idCarrinho: idCarrinho,
      },
    })
  );
  return Promise.all(
    await itens.map(async (item) => {
      return await ProdutoModel.findOne({
        where: {
          id: item.idProduto,
        },
      });
    })
  );
}

async function getEndereco(idCarrinho) {
  const carrinho = await CarrinhoModel.findOne({
    where: {
      id: idCarrinho,
    },
  });
  const endereco = await EnderecoModel.findOne({
    where: {
      id: carrinho.idEndereco,
    },
  });

  return endereco;
}
