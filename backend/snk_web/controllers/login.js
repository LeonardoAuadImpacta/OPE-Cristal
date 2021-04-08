const clienteModel = require("../models/Cliente");
module.exports =  async (req, res, next) => {
    const token = "snk-token";
    const resEmail = req.body.email;
    const resSenha = req.body.senha;


    const cliente = await  clienteModel.findOne(
        {
            where: {
                email: resEmail
            }
        }
    )

    if (cliente === null ) {
        return res.status(401).json({
            "message": "Usuario não cadastrado"
        })
    }

    if (cliente.senha !== resSenha) {
        return  res.status(403).json({
            "message": "Email ou senha inválidos"
        })
    }
    return res.json({
        id: cliente.id,
        token: token,
        username: cliente.nome,
        profile: cliente.profile,
    });

}
