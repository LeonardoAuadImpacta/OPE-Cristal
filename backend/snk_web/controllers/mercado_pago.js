const mercadopago = require("mercadopago");

const ItemCarrinhoModel = require("../models/ItemCarrinho");
const ProdutoModel = require("../models/Produto");
const PedidoModel = require("../models/Pedido");
const CarrinhoModel = require("../models/Carrinho");

const criarPreferencia = async (req, res, next) => {
  const idCarrinho = req.body.idCarrinho;
  const carrinho = await CarrinhoModel.findOne({
    where: {
      id: idCarrinho,
    },
  });
  const itens = await Promise.all(
    await ItemCarrinhoModel.findAll({
      where: {
        idCarrinho: carrinho.id,
      },
    })
  );

  const items = await Promise.all(
    itens.map(async (item) => {
      const produto = await ProdutoModel.findOne({
        where: {
          id: item.idProduto,
        },
      });
      return {
        title: produto.nome,
        description: produto.subtitulo,
        unit_price: Number(item.precoVenda),
        quantity: Number(item.quantidade),
      };
    })
  );
  let preference = {
    external_reference: "default",
    items: items,
  };

  const preferenceResponse = await mercadopago.preferences.create(preference);

  await PedidoModel.create({
    idCliente: carrinho.idCliente,
    idCarrinho: carrinho.id,
    status: "AWAITING_PAYMENT",
    preference_id: preferenceResponse.body.id,
  }).then(() => {
    CarrinhoModel.update(
      {
        status: "SUCCESS",
      },
      {
        where: {
          id: idCarrinho,
        },
      }
    );
  });

  return res.status(200).json({ id: preferenceResponse.body.id });
};

module.exports = {
  criarPreferencia,
};
