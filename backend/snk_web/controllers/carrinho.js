const moment = require("moment");
const CarrinhoModel = require("../models/Carrinho");

function calcularDataExpiracao() {
  const agora = moment();
  const dataExpiracao = agora.add(3, "days").format();
  return dataExpiracao;
}

const create = (req, res, next) => {
  const dataExpiracao = calcularDataExpiracao();

  return CarrinhoModel.create({
    dataExpiracao,
    ...req.body,
  })
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      // TODO: treat possible reasons and add as "error" on response json
      res.status(400).json();
    });
};

const get = async (req, res, next) => {
  const carrinho = await CarrinhoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(carrinho);
};

module.exports = {
  create,
  get,
};
