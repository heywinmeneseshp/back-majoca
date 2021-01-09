'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      doc: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: {
          msg: "el documento ya existe"
        },
      },
      tipo_doc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre2: {
        type: Sequelize.STRING
      },
      apellido1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido2: {
        type: Sequelize.STRING
      },
      usuario: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tipo_usuario: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fecha_exp: {
        type: Sequelize.STRING
      },
      fecha_nac: {
        type: Sequelize.STRING
      },
      lugar_nac: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      barrio: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: {
          msg: "el email ya existe"
        },
      },
      genero: {
        type: Sequelize.STRING
      },
      doc_padre: {
        type: Sequelize.STRING
      },
      doc_madre: {
        type: Sequelize.STRING
      },
      siatuacion_lab: {
        type: Sequelize.STRING
      },
      ocupacion: {
        type: Sequelize.STRING
      },
      empresa: {
        type: Sequelize.STRING
      },
      dir_empresa: {
        type: Sequelize.STRING
      },
      tel_empresa: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};