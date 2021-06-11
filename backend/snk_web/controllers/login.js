const clienteModel = require("../models/Cliente");
const jwt = require("jsonwebtoken");

const DAY_IN_SECONDS = 24 * 60 * 60;

module.exports = async (req, res, next) => {
  const resEmail = req.body.email;
  const resSenha = req.body.senha;

  const cliente = await clienteModel.findOne({
    where: {
      email: resEmail,
    },
  });

  if (cliente === null || cliente.senha !== resSenha) {
    return res.status(401).json({
      message: "Email ou senha inválidos",
    });
  }

  const claims =
    cliente.profile === "CUSTOMER"
      ? [`CUSTOMER/${cliente.id}`]
      : ["CUSTOMER", "ADMIN"];

  const token = jwt.sign(
    {
      id: cliente.id,
      claims,
    },
    process.env.AUTH_SECRET || "a-secret",
    {
      expiresIn: DAY_IN_SECONDS,
    }
  );

  return res.json({
    id: cliente.id,
    token: token,
    username: cliente.nome,
    profile: cliente.profile,
    urlProfile: cliente.imgProfile,
  });
};
