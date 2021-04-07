import Http from '../config/http';

const listProdutos = function (page=1, limit=10) {
  return Http.get(`/produto?_page=${page}&_limit=${limit}`);
}

export { listProdutos };
