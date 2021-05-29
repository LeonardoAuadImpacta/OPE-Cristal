import axios from "axios";

/**
 * Cria um usuário
 *
 * @param {Object} user
 * @param {String} user.nome
 * @param {string} user.sobrenome
 * @param {string} user.telefone
 * @param {string} user.pseudonimo
 * @param {string} user.email
 * @param {string} user.senha
 *
 * @returns {Promise}
 */
const createCliente = function (
  nome,
  sobrenome,
  telefone,
  pseudonimo,
  email,
  senha,
  imgProfile
) {
  return axios.post("/cliente", {
    nome,
    sobrenome,
    telefone,
    pseudonimo,
    email,
    senha,
    profile: "CUSTOMER",
    imgProfile,
  });
};

const createAdmin = function ({
  nome,
  sobrenome,
  telefone,
  pseudonimo,
  email,
  senha,
  imgProfile,
}) {
  return axios.post("/cliente/admin", {
    nome,
    sobrenome,
    telefone,
    pseudonimo,
    email,
    senha,
    imgProfile,
  });
};

const listAdmin = () => {
  return axios.get("/cliente");
};

export { createCliente, createAdmin, listAdmin };
