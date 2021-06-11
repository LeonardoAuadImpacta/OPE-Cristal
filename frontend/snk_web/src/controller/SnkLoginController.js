import { login as serviceLogin } from "../service/AuthService";

export const login = function (email, password, view) {
  return serviceLogin(email, password)
    .then((res) => {
      if (res.status == 200) {
        const cliente = res.data;
        view.$store.commit("setUserSession", cliente);
        if (cliente.profile == "ADMIN") {
          view.$router.push({ name: "SnkAdmin" });
          view.$store.commit("setToken", cliente.token);
        } else {
          view.$store.commit("setToken", cliente.token);
          view.$store.dispatch("setCarrinho", { idCliente: cliente.id });
          view.$router.push({ name: "SnkShop" });
        }
      } else {
        view.flagAlert("iii");
      }
    })
    .catch((error) => {
      let status = error.response.status;

      if (status == 400) {
        error.response.data.details.forEach((det, i) => {
          setTimeout(() => {
            view.flagAlert(det.msg);
          }, i * view.timeAlert * 1.5);
        });
      }

      if (status == 403 || status == 401) {
        view.flagAlert(error.response.data.message);
      }
    });
};
