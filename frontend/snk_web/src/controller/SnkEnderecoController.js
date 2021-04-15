import { createEndereco as _createEndereco } from "../service/EnderecoService";

const createEndereco = (idCliente, endereco, view) => {
  return _createEndereco(idCliente, endereco)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        view.dialog = false;
        window.alert("Endereço criado com sucesso!");
        // TODO: dar refresh da listagem de endereços
      } else {
        console.log(res);
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export { createEndereco };
