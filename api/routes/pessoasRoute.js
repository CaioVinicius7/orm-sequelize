const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");
const router = Router();

// Rotas
router.get("/pessoas", PessoaController.pegaTodasPessoas)
      .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
      .post("/pessoas", PessoaController.criaPessoa)
      .put("/pessoas/:id", PessoaController.atualizaPessoa)
      .delete("/pessoas/:id", PessoaController.apagaPessoa)
      .get("/pessoas/:idEstudante/matricula/:idMatricula", PessoaController.pegaUmaMatricula)
      .post("/pessoas/:idEstudante/matricula/", PessoaController.criaMatricula)
      .put("/pessoas/:idEstudante/matricula/:idMatricula", PessoaController.atualizaMatricula)
      .delete("/pessoas/:idEstudante/matricula/:idMatricula", PessoaController.apagaMatricula);

module.exports = router;