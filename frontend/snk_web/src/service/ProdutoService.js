import axios from "axios";

const listProdutos = function (page = 1, limit = 10) {
  return axios.get(`/produto?_pagina=${page}&_itens=${limit}`);
};

const criarProduto = function (produto) {
  return axios.post(`/produto`, produto);
};

const editarProduto = function (produto, id) {
  return axios.put(`/produto/${id}`, produto);
};

const deletarProduto = function (id) {
  return axios.delete(`/produto/${id}`);
};

export { listProdutos, criarProduto, editarProduto, deletarProduto };
