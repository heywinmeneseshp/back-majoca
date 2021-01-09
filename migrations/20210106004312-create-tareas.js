'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_tarea: {
        type: Sequelize.STRING
      },
      fecha_publicacion: {
        type: Sequelize.DATEONLY
      },
      fecha_vencimiento: {
        type: Sequelize.DATEONLY
      },
      periodo: {
        type: Sequelize.STRING
      },
      estado_tarea: {
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
    await queryInterface.dropTable('tareas');
  }
};