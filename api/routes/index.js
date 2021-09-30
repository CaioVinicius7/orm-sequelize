const pessoas = require("./pessoasRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");

module.exports = (app, express) => {

   // Pega dados do body e converte para json
   app.use(
      express.json(),
      express.urlencoded({ extended: true })
   );

   // Rotas
   app.use(
      pessoas,
      niveis,
      turmas
   );
   
}