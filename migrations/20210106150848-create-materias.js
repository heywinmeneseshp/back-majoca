'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('materias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_materia: {
        type: Sequelize.STRING
      },
      nombre_materia: {
        type: Sequelize.STRING
      },
      cursos: {
        type: Sequelize.JSON
      },
      profesores_materias: {
        type: Sequelize.JSON
      },
      estado_materia: {
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
    await queryInterface.dropTable('materias');
  }
};