"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
class Ingredient extends sequelize_1.Model {
}
exports.Ingredient = Ingredient;
Ingredient.init({
    unit: sequelize_1.DataTypes.STRING,
    amount: sequelize_1.DataTypes.FLOAT
}, { sequelize: db_1.db, modelName: 'ingredient' });
