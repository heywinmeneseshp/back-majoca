'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class materias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  materias.init({
    id_materia: DataTypes.STRING,
    nombre_materia: DataTypes.STRING,
    cursos: DataTypes.JSON,
    profesores_materias: DataTypes.JSON,
    estado_materia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'materias',
  });
  return materias;
};