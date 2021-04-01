// Módulo com a lógica de acesso ao DB
const { Sequelize } = require("sequelize");

const dbUser = process.env.MYSQL_USER || "user";
const dbPassword = process.env.MYSQL_PASSWORD || "password";
const dbHost = process.env.MYSQL_HOST || "localhost";
const dbPort = process.env.MYSQL_PORT || "3306";
const dbName = process.env.MYSQL_DBNAME || "db";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "mysql",
});

module.exports = sequelize;
