var express = require("express");
var router = express.Router();

const loginRoutes = require("./login");
const customerRoutes = require("./customer");

router.get("/", function (req, res, next) {
  res.json({ version: "v1.0.0" });
});

// Unauthenticated endpoints
router.use("/login", loginRoutes);

// Authenticated endpoints
router.use("/customer", customerRoutes);

module.exports = router;
