const mercadopago = require('mercadopago');
const ItemCarrinhoModel = require("../models/ItemCarrinho");
const ProdutoModel = require("../models/Produto");
const PedidoModel = require("../models/Pedido");
const CarrinhoModel = require("../models/Carrinho");


const criarPreferencia = async (req, res, next) => {

    const idCarrinho = req.body.idCarrinho;
    const carrinho = await CarrinhoModel.findOne({
        where: {
            id: idCarrinho
        }
    })
    const itens = await Promise.all((await ItemCarrinhoModel.findAll({
        where: {
            idCarrinho: carrinho.id,
        },
    })))


    const items = await Promise.all(itens.map(async item => {
        const produto = (await ProdutoModel.findOne({
            where: {
                id: item.idProduto
            }
        }))
        return {
            title: produto.nome,
            description: produto.subtitulo,
            unit_price: Number(item.precoVenda),
            quantity: Number(item.quantidade)
        }
    }));
    // Cria um objeto de preferência



    let preference = {
        external_reference: "default",
        items: items,
    };



    const preferenceResponse = await mercadopago.preferences.create(preference)

    const pedido = await PedidoModel.create({
        idCliente: carrinho.idCliente,
        idCarrinho: carrinho.id,
        status: "AWAITING_PAYMENT",
        preference_id: preferenceResponse.body.id
    })
    console.log(preferenceResponse)
    res.status(200).json({id: preferenceResponse.body.id})
};

module.exports = {
    criarPreferencia
};
