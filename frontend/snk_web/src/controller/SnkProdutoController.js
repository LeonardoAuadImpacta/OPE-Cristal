import { listProdutos as _listProdutos } from '../service/ProdutoService';

const listProdutos = function(page, limit, view) {
  return _listProdutos(page, limit)
           .then(res => {
             if(res.status == 200) {
               view.cards = res.data.map(produto => {
                 // TODO: adicionar campo URL no BD
                 return {
                   url: "https://http2.mlstatic.com/D_NQ_NP_819180-MLB44334481897_122020-O.webp",
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

export { listProdutos };
