'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  notas.init({
    id_estudiante: DataTypes.STRING,
    id_curso: DataTypes.STRING,
    materia: DataTypes.STRING,
    id_tarea: DataTypes.STRING,
    nota: DataTypes.DOUBLE,
    tipo_nota: DataTypes.STRING,
    periodo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'notas',
  });
  return notas;
};