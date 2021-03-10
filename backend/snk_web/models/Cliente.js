const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/database");

class Cliente extends Model {}

Cliente.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
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
    enderecoRua: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    enderecoNumero: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    enderecoComplemento: {
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
    senhaSalt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Cliente",
  }
);

// the defined model is the class itself
console.log(Cliente === models.Cliente); // true

export default Cliente;
