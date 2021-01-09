'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cursos.init({
    id_curso: DataTypes.STRING,
    curso: DataTypes.STRING,
    anho: DataTypes.INTEGER,
    estado_curso: DataTypes.STRING,
    profesores_curso: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'cursos',
  });
  return cursos;
};