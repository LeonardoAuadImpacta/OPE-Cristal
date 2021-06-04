const ClienteModel = require("../models/Cliente");

const create = (req, res, next) => {
  return ClienteModel.create({
    profile: "CUSTOMER",
    ...req.params,
  })
    .then(() => {
      res.status(201).json();
    })
    .catch((reason) => {
      console.log(reason);
      // TODO: treat possible reasons and add as "error" on response json
      res.status(400).json({ error: "Falha ao tentar criar usuário" });
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
