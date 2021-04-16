import { criarPreferencia as serviceCriarPreferencia } from "../service/MercadoPagoService";


export const preferencia =  function(order) {
    return serviceCriarPreferencia(order)
                .then(function(response) {
                    return response.data;
                })
                .then( preference => {

                    let script = document.createElement('script')
                    script.setAttribute('src', 'https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js')
                    script.dataset.preferenceId = preference.id;
                    document.getElementById('mercado').appendChild(script)
                    setTimeout(() => {
                        document.getElementsByClassName("mercadopago-button")[0].click()
                    }, 500);

                })
                .catch(error => {
                    console.log(error)
                    
                });

}
                