import axios from "axios";

/**
 * Busca endereço a partir do id do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
const listEnderecoByIdCliente = async (idCliente) => {
  return axios.get(`/cliente/${idCliente}/endereco`);
};

/**
 * Cria um endereço
 *
 * @param {Object} endereco
 * @param {string} endereco.uf
 * @param {string} endereco.cidade
 * @param {string} endereco.bairro
 * @param {string} endereco.rua
 * @param {string} endereco.numero
 * @param {string} endereco.complemento
 * @param {string} endereco.cep
 *
 * @returns {Promise}
 */
const createEndereco = function (
  idCliente,
  { uf, cidade, bairro, rua, numero, complemento, cep }
) {
  return axios.post(`cliente/${idCliente}/endereco`, {
    uf,
    cidade,
    bairro,
    rua,
    numero,
    complemento,
    cep,
  });
};

const updateEndereco = function (
  idCliente,
  { id, uf, cidade, bairro, rua, numero, complemento, cep }
) {
  return axios.put(`cliente/${idCliente}/endereco/${id}`, {
    uf,
    cidade,
    bairro,
    rua,
    numero,
    complemento,
    cep,
  });
};

const deletarEndereco = function (idCliente, { idEndereco }) {
  return axios.delete(`cliente/${idCliente}/endereco/${idEndereco}`);
};

const buscarCep = async (cep) => {
  let myHeaders = new Headers({
    "Content-Type": "application/json",
  });
  return await fetch(`https://viacep.com.br/ws/${cep}/json`, {
    method: "GET",
    headers: myHeaders,
  }).then((r) => r.json());
};

export {
  createEndereco,
  listEnderecoByIdCliente,
  buscarCep,
  updateEndereco,
  deletarEndereco,
};
