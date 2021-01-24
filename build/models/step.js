"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
const recipe_1 = require("./recipe");
const uuid = require('uuid/v4');
class Step extends sequelize_1.Model {
}
exports.Step = Step;
Step.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.DataTypes.UUIDV4,
        defaultValue: uuid()
    },
    desc: sequelize_1.DataTypes.STRING,
    order: sequelize_1.DataTypes.INTEGER
}, { sequelize: db_1.db, modelName: 'step' });
Step.belongsTo(recipe_1.Recipe);
