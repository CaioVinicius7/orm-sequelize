'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    // Popula as tabelas com dados definidos
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: "caio vinícius",
        ativo: true,
        email: "caio@gmail.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "ellen bessa",
        ativo: true,
        email: "ellen@gmail.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "pedro henrique",
        ativo: true,
        email: "pedro@gmail.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "niel cintra",
        ativo: true,
        email: "niel@gmail.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
