const express = require("express");
const mpController = require("../../controllers/mercado_pago");

const router = express.Router();

router.post("/preferencia", mpController.criarPreferencia);

module.exports = router;
