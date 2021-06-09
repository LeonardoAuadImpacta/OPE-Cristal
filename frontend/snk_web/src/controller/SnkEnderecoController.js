import {
  createEndereco as _createEndereco,
  listEnderecoByIdCliente as _listEnderecoByIdCliente,
  updateEndereco as _updateEndereco,
  deletarEndereco as _deletarEndereco,
} from "../service/EnderecoService";

import { selecionarEndereco as _selecionarEndereco } from "../service/CarrinhoService";

// const createEndereco = (idCliente, endereco, view) => {
//   return _createEndereco(idCliente, endereco)
//     .then((res) => {
//       if (res.status === 200 || res.status === 201) {
//         view.dialog = false;
//         window.alert("Endereço criado com sucesso!");
//         // TODO: dar refresh da listagem de endereços
//       } else {
//         console.log(res);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const createEndereco = _createEndereco;

// const updateEndereco = (idCliente, endereco, view) => {
//   return _updateEndereco(idCliente, endereco)
//     .then((res) => {
//       if (res.status === 200 || res.status === 201) {
//         view.dialog = false;
//         window.alert("Endereço editado com sucesso!");
//         // TODO: dar refresh da listagem de endereços
//       } else {
//         console.log(res);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const updateEndereco = _updateEndereco;

const deletarEndereco = (idCliente, endereco, view) => {
  return _deletarEndereco(idCliente, { idEndereco: endereco.id })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        view.dialog = false;
        window.alert("Endereço deletado com sucesso!");
        // TODO: dar refresh da listagem de endereços
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const listEnderecoByIdCliente = _listEnderecoByIdCliente;

const selecionarEndereco = (idCliente, idCarrinho, idEndereco) => {
  return _selecionarEndereco(idCliente, idCarrinho, idEndereco);
};

export {
  createEndereco,
  listEnderecoByIdCliente,
  selecionarEndereco,
  updateEndereco,
  deletarEndereco,
};
