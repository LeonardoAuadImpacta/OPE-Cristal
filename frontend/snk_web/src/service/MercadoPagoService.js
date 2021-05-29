import axios from "../config/http";

export const criarPreferencia = function (idCarrinho) {
  return axios.post(
    "/transacao/preferencia",
    JSON.stringify({
      idCarrinho: idCarrinho,
    })
  );
};
