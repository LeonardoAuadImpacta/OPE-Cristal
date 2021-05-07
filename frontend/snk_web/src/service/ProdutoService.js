import Http from '../config/http';

const listProdutos = function (page = 1, limit = 10) {
    return Http.get(`/produto?_page=${page}&_limit=${limit}`);
}

const criarProduto = function (produto) {
    return Http.post(
        `/produto`,
        JSON.stringify(produto)
    );
}

const editarProduto = function (produto, id) {
    return Http.put(
        `/produto/${id}`,
        JSON.stringify(produto)
    );
}

const deletarProduto = function (id) {
    return Http.delete(
        `/produto/${id}`
    );
}

export {
    listProdutos,
    criarProduto,
    editarProduto,
    deletarProduto
};
