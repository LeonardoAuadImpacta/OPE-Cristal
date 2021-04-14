"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("cliente", [
      {
        nome: "User",
        sobrenome: "Customer",
        pseudonimo: "user_customer",
        telefone: "1190909090",
        email: "user.customer@email.com",
        senha: "1234abcd",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "User",
        sobrenome: "Admin",
        pseudonimo: "user_admin",
        telefone: "1190909090",
        email: "user.admin@email.com",
        senha: "1234abcd",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cliente", null, {});
  },
};
