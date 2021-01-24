import { QueryInterface, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export default {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.createTable('food-nutrients', {
      amount: DataType.FLOAT,
      unit: DataType.STRING
    });
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return await queryInterface.dropTable('food-nutrients');
  }
};
