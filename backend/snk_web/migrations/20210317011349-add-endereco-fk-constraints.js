"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      queryInterface.addConstraint(
        "endereco",
        {
          fields: ["idCliente"],
          type: "foreign key",
          name: "fk_endereco_cliente",
          references: {
            table: "cliente",
            field: "id",
          },
          onDelete: "cascade",
        },
        { transaction: t }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      queryInterface.removeConstraint("endereco", "fk_endereco_cliente", {
        transaction: t,
      });
    });
  },
};
