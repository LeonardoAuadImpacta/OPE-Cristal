"use strict";
const { DataTypes, Model } = require("sequelize");
const Carrinho = require("../models/Carrinho");
const ItemCarrinho = require("../models/ItemCarrinho");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.renameTable("item_pedido", "item_carrinho"),
      queryInterface.removeColumn("item_carrinho", "idPedido"),
      queryInterface.addColumn(
        "item_carrinho",
        "idCarrinho",
        DataTypes.BIGINT,
        { references: { model: { tableName: "carrinho" } } }
      )
    );
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all(
      queryInterface.addColumn("item_carrinho", "idPedido", DataTypes.BIGINT, {
        references: { model: { tableName: "pedido" } },
      }),
      queryInterface.removeColumn("item_carrinho", "idCarrinho"),
      queryInterface.renameTable("item_carrinho", "item_pedido")
    );
  },
};
// dúvidas sobre a atualização do nome da tabela
