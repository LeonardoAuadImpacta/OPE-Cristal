import Http from '../config/http'; // não precisa de .js
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
 const createCliente = function (nome, sobrenome, telefone, pseudonimo, email, senha,imgProfile )  {
    return Http.post('/cliente', { nome, sobrenome, telefone, pseudonimo, email, senha, profile: "CUSTOMER",imgProfile})
};

export { createCliente }
