const express = require("express");
const routes = require("./routes");
const app = express();

// Inicia as rotas
routes(app, express);

app.listen(3000, () => {
   console.log("Servidor: http://localhost:3000/");
});

module.exports = app;