const pessoas = require("./pessoasRoute");

module.exports = (app, express) => {

   // Pega dados do body e converte para json
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   // Rotas
   app.use(pessoas);

}