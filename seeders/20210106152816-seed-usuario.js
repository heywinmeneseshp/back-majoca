'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("usuarios", [{
      nombre1: "Heywin",
      apellido1: "Meneses", 
      usuario: "heywinmeneses",
      contrasena: "$2y$06$exKWLLMvZbiv0EAttct17.qdkFhwOgEMZqxgZ2FZ.nL33VfQmf0CG", /*heywinmeneses bcrypt 6*/
      email: "heywin1@gmail.com",
      doc: "1094579343",
      tipo_usuario: "administrador",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('usuarios', null, {});
    }
};
