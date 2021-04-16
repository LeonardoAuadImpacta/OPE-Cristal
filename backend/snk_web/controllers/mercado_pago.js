const mercadopago = require('mercadopago');



const criarPreferencia = (req, res, next) => {

  // Cria um objeto de preferência
  let preference = {
    items: [{
      title: req.body.description,
      unit_price: Number(req.body.price),
      quantity: Number(req.body.quantity),
    }],
    back_urls: {
      "success": "http://localhost:8080/carrinho",
      "failure": "http://localhost:8080/carrinho",
      "pending": "http://localhost:8080/carrinho"
    },
    auto_return: 'approved',
  };

  mercadopago.preferences.create(preference)
      .then(function (response) {
        res.status(200).json({id :response.body.id})
      }).catch(function (error) {
    console.log(error);
  });
};

module.exports = {
  criarPreferencia
};
