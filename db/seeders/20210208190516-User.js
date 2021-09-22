'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_game', [
      {
        id: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
        username: 'sultonsabillar',
        email: 'sultonsabillar@gmail.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6dcb3b28-d798-4cec-80b5-516bfe18c25b',
        username: 'soniraharjo',
        email: 'soniraharjo@binar.co.id',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7bbe267d-e1aa-41d5-9a48-50e74fc04400',
        username: 'sabrina',
        email: 'sabrina@binar.co.id',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game', null, {});
  }
};

