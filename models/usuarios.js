'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuarios.init({
    doc: DataTypes.STRING,
    tipo_doc: DataTypes.STRING,
    nombre1: DataTypes.STRING,
    nombre2: DataTypes.STRING,
    apellido1: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    tipo_usuario: DataTypes.STRING,
    fecha_exp: DataTypes.STRING,
    fecha_nac: DataTypes.STRING,
    lugar_nac: DataTypes.STRING,
    direccion: DataTypes.STRING,
    barrio: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    genero: DataTypes.STRING,
    doc_padre: DataTypes.STRING,
    doc_madre: DataTypes.STRING,
    siatuacion_lab: DataTypes.STRING,
    ocupacion: DataTypes.STRING,
    empresa: DataTypes.STRING,
    dir_empresa: DataTypes.STRING,
    tel_empresa: DataTypes.STRING,
    salario: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};