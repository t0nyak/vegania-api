"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
const step_1 = require("./step");
const food_1 = require("./food");
const ingredient_1 = require("./ingredient");
const uuid = require('uuid/v4');
class Recipe extends sequelize_1.Model {
}
exports.Recipe = Recipe;
Recipe.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: uuid()
    },
    name: sequelize_1.DataTypes.STRING,
    level: sequelize_1.DataTypes.STRING,
    duration: sequelize_1.DataTypes.STRING
}, { sequelize: db_1.db, modelName: 'recipe' });
Recipe.hasMany(step_1.Step);
Recipe.belongsToMany(food_1.Food, { through: ingredient_1.Ingredient });
