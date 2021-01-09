'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tareas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tareas.init({
    nombre_tarea: DataTypes.STRING,
    fecha_publicacion: DataTypes.DATEONLY,
    fecha_vencimiento: DataTypes.DATEONLY,
    periodo: DataTypes.STRING,
    estado_tarea: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tareas',
  });
  return tareas;
};