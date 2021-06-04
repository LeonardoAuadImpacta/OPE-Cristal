const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const apiRouter = require("./routes/api");

const mercadopago = require("mercadopago");

// Configura credenciais
mercadopago.configure({
  access_token:
    "TEST-5298657185354829-041321-baf6ed57c7ea4c95f2246b824dba3f5b-254450116",
});

// // Cria um objeto de preferência
// let preference = {
//     items: [
//         {
//             title: 'Meu produto',
//             unit_price: 100,
//             quantity: 1,
//         }
//     ]
// };

// mercadopago.preferences.create(preference)
//     .then(function (response) {
// // Este valor substituirá a string "<%= global.id %>" no seu HTML
//         global.id = response.body.id;
//     }).catch(function (error) {
//     console.log(error);
// });

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "access-control-allow-methods,access-control-allow-origin,allow,content-type,authorization"
  );
  res.header("Access-Control-Max-Age", "86400");
  app.use(cors());

  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", apiRouter);

module.exports = app;
