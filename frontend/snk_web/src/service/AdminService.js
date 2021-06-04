import axios from "axios";

const listAdmin = () => {
  return axios.get("/admin");
};

const createAdmin = function ({
  nome,
  sobrenome,
  telefone,
  pseudonimo,
  email,
  senha,
  imgProfile,
}) {
  return axios.post("/admin", {
    nome,
    sobrenome,
    telefone,
    pseudonimo,
    email,
    senha,
    imgProfile,
  });
};

const deleteAdmin = function (id) {
  return axios.delete(`/admin/${id}`);
};

const updateAdmin = function (
  id,
  { nome, sobrenome, telefone, pseudonimo, imgProfile }
) {
  return axios.patch(`/admin/${id}`, {
    nome,
    sobrenome,
    telefone,
    pseudonimo,
    imgProfile,
  });
};

export { createAdmin, deleteAdmin, listAdmin, updateAdmin };
