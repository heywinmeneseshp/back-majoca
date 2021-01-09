'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_estudiante: {
        type: Sequelize.STRING
      },
      id_curso: {
        type: Sequelize.STRING
      },
      materia: {
        type: Sequelize.STRING
      },
      id_tarea: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.DOUBLE
      },
      tipo_nota: {
        type: Sequelize.STRING
      },
      periodo: {
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
    await queryInterface.dropTable('notas');
  }
};