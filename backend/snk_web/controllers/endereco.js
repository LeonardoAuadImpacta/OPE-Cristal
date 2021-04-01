const EnderecoModel = require("../models/Endereco");

const create = (req, res, next) => {
  return EnderecoModel.create(req.body)
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      res.status(400).json();
    });
};

const get = async (req, res, next) => {
  const endereco = await EnderecoModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(endereco);
};

module.exports = {
  create,
  get,
};
