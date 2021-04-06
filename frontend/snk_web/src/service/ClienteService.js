import Http from '../config/http'; // não precisa de .js
/**
 * Create an user
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
 const createCliente = function (nome, sobrenome, telefone, pseudonimo, email, senha )  {
    return Http.post('/cliente', { "nome": nome, "sobrenome": sobrenome, "telefone": telefone, "pseudonimo": pseudonimo, "email": email, "senha": senha })
};

export { createCliente }
