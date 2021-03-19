const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

class Cliente extends Model {}

Cliente.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    pseudonimo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    senhaSalt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "cliente",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Cliente;
