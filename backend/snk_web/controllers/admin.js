const ClienteModel = require("../models/Cliente");

const { sanitizeQuery } = require("../lib/database/util");

const create = (req, res, next) => {
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

const _delete = async (req, res, next) => {
  const id = req.params.id;

  return ClienteModel.destroy({
    where: {
      id,
      profile: "ADMIN",
    },
  })
    .then((deleted_count) => {
      if (deleted_count > 0) {
        return res.send(200);
      } else {
        return res.status(404).json({ error: "Admin não encontrado" });
      }
    })
    .catch((reason) => {
      console.log(reason);
      return res.status(400).json({ error: "Falha ao tentar deletar admin" });
    });
};

const update = async (req, res, next) => {
  const id = req.params.id;
  delete req.params.id;

  const admin = await ClienteModel.findOne({
    where: {
      id,
      profile: "ADMIN",
    },
  })
    .then((cliente) => cliente)
    .catch((reason) => {
      console.log(reason);
      return res
        .status(400)
        .json({ error: "Falha ao tentar atualizar administrador" });
    });

  if (!admin)
    return res.status(404).json({ error: "Administrador não encontrado" });

  if (req.params.email) {
    const newEmail = req.params.email;
    await ClienteModel.findOne({
      where: {
        email: newEmail,
      },
    }).then((cliente) => {
      if (cliente) {
        return res
          .status(400)
          .json({
            error:
              "Falha ao tentar atualizar administrador. Email já cadastrado",
          });
      }
    });
  }

  const fields = Object.keys(ClienteModel.rawAttributes);
  const sanitizedQuery = sanitizeQuery(fields, req.params);

  const updatedAdmin = Object.assign(admin, sanitizedQuery);

  return updatedAdmin
    .save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((reason) => {
      console.log(reason);
      return res
        .status(400)
        .json({ error: "Falha ao tentar atualizar administrador" });
    });
};

const get = async (req, res, next) => {
  const cliente = await ClienteModel.findOne({
    where: {
      id: req.params.id,
      profile: "ADMIN",
    },
  });

  return res.status(200).json(cliente);
};

module.exports = {
  create,
  list,
  _delete,
  update,
  get,
};
