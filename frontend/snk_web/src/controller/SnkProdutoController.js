import {
    listProdutos as _listProdutos,
    criarProduto as _criarProduto,
    editarProduto as _editarProduto,
    deletarProduto as _deletarProduto,
} from '../service/ProdutoService';

const listProdutos = function (page, limit, view) {
    return _listProdutos(page, limit)
        .then(res => {
            if (res.status == 200) {
                view.cards = res.data.map(produto => {
                    // TODO: adicionar campo URL no BD
                    return {
                        url: produto.urlImage,
                        ...produto
                    };
                });
            } else {
                view.flagAlert("Falha ao listar produtos");
            }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
            view.flagAlert("Falha ao listar produtos");
        })
}

const listProdutosJson = async function (page, limit) {
    let resp = await _listProdutos(page, limit)
    return resp.data
}

const criarProduto = async function (produto) {
    let resp = await _criarProduto(produto)
    return resp.data
}

const editarProduto = async function (produto, id) {
    let resp = await _editarProduto(produto, id)
    return resp.data
}
const deletarProduto = async function (id) {
    let resp = await _deletarProduto(id)
    return resp.data
}

export {
    listProdutos,
    listProdutosJson,
    criarProduto,
    editarProduto,
    deletarProduto
};
