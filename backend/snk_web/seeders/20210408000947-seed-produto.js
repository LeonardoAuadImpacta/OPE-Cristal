"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("produto", [
      {
        nome: "Nome produto 1",
        subtitulo: "Subtitulo produto 1",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "10.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 2",
        subtitulo: "Subtitulo produto 2",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "20.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 3",
        subtitulo: "Subtitulo produto 3",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 4",
        subtitulo: "Subtitulo produto 4",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 5",
        subtitulo: "Subtitulo produto 5",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 6",
        subtitulo: "Subtitulo produto 6",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 7",
        subtitulo: "Subtitulo produto 7",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 8",
        subtitulo: "Subtitulo produto 8",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 9",
        subtitulo: "Subtitulo produto 9",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 10",
        subtitulo: "Subtitulo produto 10",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        nome: "Nome produto 11",
        subtitulo: "Subtitulo produto 11",
        descricao:
          "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada.",
        precoAtual: "30.00",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("produto", null, {});
  },
};
