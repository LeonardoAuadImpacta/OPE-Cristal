const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

const PedidoModel = require("./Pedido");
const CarrinhoModel = require("./Carrinho");
const EnderecoModel = require("./Endereco");

class Cliente extends Model {}

Cliente.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pseudonimo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senhaSalt: {
      type: DataTypes.STRING,
    },
    profile: {
      type: DataTypes.ENUM({
        values: ["ADMIN", "CUSTOMER"],
      }),
      allowNull: false,
    },
    imgProfile: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "cliente",
    freezeTableName: true,
    timestamps: true,
  }
);

Cliente.hasMany(PedidoModel, { foreignKey: "idCliente", as: "pedidos" });
Cliente.hasMany(CarrinhoModel, { foreignKey: "idCliente", as: "carrinhos" });
Cliente.hasMany(EnderecoModel, { foreignKey: "idCliente", as: "enderecos" });

module.exports = Cliente;
