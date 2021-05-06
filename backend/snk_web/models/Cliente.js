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
      type: DataTypes.STRING(1024),
      allowNull: false,
      unique: true
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
  },
  {
    sequelize,
    modelName: "cliente",
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Cliente;
