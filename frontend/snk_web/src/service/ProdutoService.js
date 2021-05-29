import axios from "axios";

const listProdutos = function (page = 1, limit = 10) {
  return axios.get(`/produto?_page=${page}&_limit=${limit}`);
};

const criarProduto = function (produto) {
  return axios.post(`/produto`, JSON.stringify(produto));
};

const editarProduto = function (produto, id) {
  return axios.put(`/produto/${id}`, JSON.stringify(produto));
};

const deletarProduto = function (id) {
  return axios.delete(`/produto/${id}`);
};

export { listProdutos, criarProduto, editarProduto, deletarProduto };
