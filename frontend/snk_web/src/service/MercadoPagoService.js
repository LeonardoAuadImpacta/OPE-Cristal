import Http from '../config/http';

export const criarPreferencia = function (order)  {
    var orderData = {
        quantity: 5,
        description: 'Tenis api ' + order,
        price: 400
      };
    
    return Http.post(
        '/transacao/preferencia', 
        (JSON.stringify(orderData))
    )

};