'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        uniqe: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        uniqe: true
      },
      password: {
        allowNull: false,
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
    await queryInterface.dropTable('user_game');
  }
};
