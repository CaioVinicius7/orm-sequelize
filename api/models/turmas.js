'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // Define o relacionamento em outra tabela
      Turmas.hasMany(models.Matriculas, {
        foreignKey: "turma_id"
      });

      // Recebe o relacionamento de outra tabela
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: "docent_id"
      });

      Turmas.belongsTo(models.Niveis, {
        foreignKey: "nivel_id"
      });

    }
  };
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};