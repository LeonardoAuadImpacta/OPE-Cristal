import axios from "../config/http"; // não precisa de .js
/**
 * Create an user
 *
 * @param {Object} user
 * @param {string} user.email
 * @param {string} user.password
 *
 * @returns {Promise}
 */
export const login = function (email, password) {
  return axios.post("/login", { email: email, senha: password });
};
