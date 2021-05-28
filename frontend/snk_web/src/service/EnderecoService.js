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
 const createEndereco = function (idCliente, { uf, cidade, bairro, rua, numero, complemento, cep })  {
    return Http.post('/endereco', { idCliente, uf, cidade, bairro, rua, numero, complemento, cep })
};

export { createEndereco, listEnderecoByIdCliente }
