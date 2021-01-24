"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const uuid = require('uuid/v4');
exports.default = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.createTable('foods', {
            id: {
                primaryKey: true,
                allowNull: false,
                type: sequelize_1.DataTypes.UUIDV4,
                defaultValue: uuid()
            },
            name: sequelize_1.DataTypes.STRING,
            type: sequelize_1.DataTypes.STRING
        });
    },
    down: async (queryInterface, Sequelize) => {
        return await queryInterface.dropTable('foods');
    }
};
