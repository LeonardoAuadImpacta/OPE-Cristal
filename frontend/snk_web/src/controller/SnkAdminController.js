import {
  listAdmin as _listAdmin,
  createAdmin as _createAdmin,
  deleteAdmin as _deleteAdmin,
  updateAdmin as _updateAdmin,
} from "../service/AdminService";

const createAdmin = _createAdmin;
const listAdmin = _listAdmin;
const deleteAdmin = _deleteAdmin;
const updateAdmin = _updateAdmin;

export { listAdmin, createAdmin, deleteAdmin, updateAdmin };
