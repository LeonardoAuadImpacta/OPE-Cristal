const { DataTypes, Model, STRING } = require("sequelize");
const sequelize = require("../lib/database");

const Cliente = require("./Cliente");

class Endereco extends Model {}

Endereco.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    idCliente: {
      type: DataTypes.BIGINT,
      references: {
        model: Cliente,
        key: "id",
      },
    },
    uf: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "endereco",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Endereco;
