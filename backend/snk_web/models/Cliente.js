const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/database");

class Cliente extends Model {
}

Cliente.init(
<<<<<<< HEAD
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
=======
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
  },
  {
    sequelize,
    modelName: "cliente",
    freezeTableName: true,
    timestamps: true,
  }
>>>>>>> 506e0e5ee61e92dcc1b145514000b6d9e2ae9b57
);

module.exports = Cliente;
