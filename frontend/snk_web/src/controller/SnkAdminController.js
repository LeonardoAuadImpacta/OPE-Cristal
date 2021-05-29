import {
  listAdmin as _listAdmin,
  createAdmin as _createAdmin,
} from "../service/ClienteService";

const createAdmin = _createAdmin;
const listAdmin = _listAdmin;

export { listAdmin, createAdmin };
