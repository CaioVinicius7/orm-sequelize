const { Router } = require("express");
const { pegaTodasPessoas } = require("../controllers/PessoaController");
const PessoaController = require("../controllers/PessoaController");
const router = Router();

// Rotas
router.get("/pessoas", PessoaController.pegaTodasPessoas);

module.exports = router;