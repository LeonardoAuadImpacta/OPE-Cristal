const ClienteModel = require("../models/Cliente");

const create = (req, res, next) => {
  return ClienteModel.create(req.body)
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      // TODO: treat possible reasons and add as "error" on response json
      res.status(400).json();
    });
};

const get = async (req, res, next) => {
  const cliente = await ClienteModel.findOne({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(cliente);
};

module.exports = {
  create,
  get,
};
