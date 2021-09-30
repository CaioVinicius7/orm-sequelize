const database = require("../models");

class PessoaController{

   static async pegaTodasPessoas(req, res){

      try{

         const todasAsPessoas = await database.Pessoas.findAll();

         return res.status(200).json(todasAsPessoas);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async pegaUmaPessoa(req, res){

      const {id} = req.params;

      try{

         const pessoa = await database.Pessoas.findOne({
            where: {
               id: Number(id)
            }
         });

         return res.status(200).json(pessoa);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async criaPessoa(req, res){
      
      const novaPessoa = req.body;
      
      try{

         const novaPessoaCriada = await database.Pessoas.create(novaPessoa);

         return res.status(201).json(novaPessoaCriada);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async atualizaPessoa(req, res){
    
      const { id } = req.params;
      const novasInfos = req.body;
      
      try{

         await database.Pessoas.update(novasInfos, {
            where: {
               id: Number(id)
            }
         });

         const pessoaAtualizada = await database.Pessoas.findOne({
            where: {
               id: Number(id)
            }
         });

         return res.status(200).json(pessoaAtualizada);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async apagaPessoa(req, res){

      const { id } = req.params;


      try{

         await database.Pessoas.destroy({
            where: {
               id: Number(id)
            }
         });

         return res.status(200).json({ status: `usuário com id ${id} deletado` });

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   // Matrículas
   static async pegaUmaMatricula(req, res){

      const { idEstudante, idMatricula } = req.params;

      try{

         const umaMatricula = await database.Matriculas.findOne({
            where: {
               id: Number(idMatricula),
               estudante_id: Number(idEstudante)
            }
         });

         return res.status(200).json(umaMatricula);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async criaMatricula(req, res){
      
      const { idEstudante } = req.params;
      const novaMatricula = { ...req.body, estudante_id: Number(idEstudante) };

      try{

         const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
         console.log(novaMatriculaCriada)
         return res.status(201).json(novaMatriculaCriada);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async atualizaMatricula(req, res){
    
      const { idEstudante, idMatricula } = req.params;
      const novasInfos = req.body;
      
      try{

         await database.Matriculas.update(novasInfos, {
            where: {
               id: Number(idMatricula),
               estudante_id: Number(idEstudante)
            }
         });

         const matriculaAtualizada = await database.Matriculas.findOne({
            where: {
               id: Number(idMatricula)
            }
         });

         return res.status(200).json(matriculaAtualizada);

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

   static async apagaMatricula(req, res){

      const { idEstudante, idMatricula } = req.params;


      try{

         await database.Matriculas.destroy({
            where: {
               id: Number(idMatricula),
               estudante_id: Number(idEstudante)
            }
         });

         return res.status(200).json({ status: `matrícula com id ${idMatricula} deletado` });

      }catch(error){
         return res.status(500).json(error.message);
      }

   }

}

module.exports = PessoaController;