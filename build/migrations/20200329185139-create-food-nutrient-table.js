"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.default = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('food-nutrients', {
            amount: sequelize_typescript_1.DataType.FLOAT,
            unit: sequelize_typescript_1.DataType.STRING
        });
    },
    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('food-nutrients');
    }
};
