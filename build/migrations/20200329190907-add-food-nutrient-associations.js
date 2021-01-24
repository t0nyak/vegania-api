"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.addColumn('FoodNutrients', 'foodId', {
            type: sequelize_1.default.UUID,
            references: {
                model: 'Food',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        });
        return await queryInterface.addColumn('FoodNutrients', 'nutrientId', {
            type: sequelize_1.default.UUID,
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
