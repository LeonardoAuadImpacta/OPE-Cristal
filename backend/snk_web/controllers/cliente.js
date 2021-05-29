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

const createAdmin = (req, res, next) => {
  return ClienteModel.create({
    profile: "ADMIN",
    ...req.params,
  })
    .then((cliente) => {
      res.status(201).json(cliente);
    })
    .catch((reason) => {
      console.log(reason);
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

const list = async (req, res, next) => {
  const pagina = req.params._pagina || 1;
  const items = req.params._items || 10;
  const offset = pagina * items <= items ? 0 : (pagina - 1) * items;

  return ClienteModel.findAll({
    where: {
      profile: "ADMIN",
    },
    offset: offset,
    limit: items,
  })
    .then((admins) => {
      return res.status(200).json(admins);
    })
    .catch((reason) => {
      console.log(reason);
      return res.status(400).json({ error: "Falha ao listar administradores" });
    });
};

module.exports = {
  create,
  createAdmin,
  get,
  list,
};
