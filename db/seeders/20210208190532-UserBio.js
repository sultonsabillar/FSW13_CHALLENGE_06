'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_game_biodata', [
      {
        uid: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
        firstname: 'Sulton',
        lastname: 'Sabilla',
        city: 'Tangerang'
      },
      {
        uid: '6dcb3b28-d798-4cec-80b5-516bfe18c25b',
        firstname: 'Soni',
        lastname: 'Raharjo',
        city: 'Jogja'
      },
      {
        uid: '7bbe267d-e1aa-41d5-9a48-50e74fc04400',
        firstname: 'Sabrina',
        lastname: 'Amalia',
        city: 'Jakarta'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_biodata', null, {})
  }
};
