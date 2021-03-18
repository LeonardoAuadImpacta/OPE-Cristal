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
    telefone: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    endereco_rua: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    endereco_numero: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    endereco_complemento: {
      type: DataTypes.STRING(30),
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
    senha_salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "cliente",
    freezeTableName: true,
    timstamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at"
  }
);

module.exports = Cliente;
