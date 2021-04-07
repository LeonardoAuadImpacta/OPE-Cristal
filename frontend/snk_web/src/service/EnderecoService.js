import Http from '../config/http'; // não precisa de .js

/**
 * Busca endereço a partir do id do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
 const listEnderecoByIdCliente = async (idCliente) => {
    return Http.get(`/endereco?idCliente=${idCliente}`);
  };

/**
 * Cria um endereço
 * 
 * 
 * @param {String} uf
 * @param {string} cidade
 * @param {string} bairro
 * @param {string} rua
 * @param {string} numero
 * @param {string} complemento
 * @param {string} cep
 * 
 * @returns {Promise}
 */
 const createEndereco = function (uf, cidade, bairro, rua, numero, complemento, cep )  {
    return Http.post('/endereco', { uf, cidade, bairro, rua, numero, complemento, cep })
};

export { createEndereco, listEnderecoByIdCliente }
