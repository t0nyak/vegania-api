import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

const uuid = require('uuid/v4');

export default {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.createTable('nutrients', {
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

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.dropTable('nutrients');
  }
};
