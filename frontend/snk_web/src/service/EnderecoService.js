import Http from '../config/http'; // não precisa de .js

/**
 * Busca endereço a partir do id do cliente.
 *
 * @param {number} idCliente
 *
 * @returns {Promise}
 */
 const getEnderecoByIdCliente = async (idCliente) => {
    return Http.get(`/endereco?idCliente=${idCliente}`);
  };

/**
 * Cria um endereço
 * 
 * @param {Object} user
 * @param {String} user.uf
 * @param {string} user.cidade
 * @param {string} user.bairro
 * @param {string} user.rua
 * @param {string} user.numero
 * @param {string} user.complemento
 * @param {string} user.cep
 * 
 * @returns {Promise}
 */
 const createEndereco = function (uf, cidade, bairro, rua, numero, complemento, cep )  {
    return Http.post('/cliente', { "uf": uf, "cidade": cidade, "bairro": bairro, "rua": rua, "numero": numero, "complemento": complemento, "cep": cep })
};

export { createEndereco }
