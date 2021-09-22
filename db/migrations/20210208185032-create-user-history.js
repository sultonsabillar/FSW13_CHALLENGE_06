'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game_history', {
      log_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'user_game',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      winStatus: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      last_login: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_game_history');
  }
};
