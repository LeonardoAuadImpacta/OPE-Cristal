const {sanitizeQuery} = require("../lib/database/util");
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
                        return res.status(400).json({error: "Falha ao criar pedido"});
                    });
            } else {
                return res.status(200).json();
            }
        })
        .catch((reason) => {
            res.status(400).json({error: "Falha ao criar pedido"});
        });
};

const list = async (req, res, next) => {
    const pagina = req.params._pagina || 1;
    const items = req.params._items || 10;
    const offset = pagina * items <= items ? 0 : (pagina - 1) * items;

    try {
        const pedidos = await Promise.all(
            await PedidoModel.findAll({
                where: {
                    ...sanitizeQuery(req.params),
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
        console.log(response);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(400).json({error: "Falha ao listar pedidos"});
    }
};

const get = async (req, res, next) => {

        const pedido = await PedidoModel.findOne({
            where: {
                id: req.params.id,
            },
        });
        const response = {
            pedido: pedido,
            produtos: await getProdutos(pedido.idCarrinho),
            endereco: await getEndereco(pedido.idCarrinho),
        }
        return res.status(200).json(response);
    }
;

module.exports = {
    create,
    list,
    get,
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
