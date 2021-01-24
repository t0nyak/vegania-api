import Sequelize, { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addColumn('FoodNutrients', 'foodId', {
      type: Sequelize.UUID,
      references: {
        model: 'Food',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    return await queryInterface.addColumn('FoodNutrients', 'nutrientId', {
      type: Sequelize.UUID,
      references: {
        model: 'Nutrient',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
