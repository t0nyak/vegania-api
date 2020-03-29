import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

const uuid = require('uuid/v4');

export default {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.createTable('foods', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUIDV4,
        defaultValue: uuid()
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
