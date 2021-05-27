import Http from '../config/http';

export const criarPreferencia = function (idCarrinho)  {

    return Http.post(
        '/transacao/preferencia', 
        (JSON.stringify({
            idCarrinho: idCarrinho
        }))
    )

};