import { Model, DataTypes } from 'sequelize';
import { db } from './db';
import { Nutrient } from './nutrient';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

const uuid = require('uuid/v4');

export class Food extends Model {}
Food.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUIDV4,
      defaultValue: uuid()
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING
  },
  { sequelize: db, modelName: 'food' }
);

Food.belongsToMany(Nutrient, { through: 'FoodNutrient' });
Food.belongsToMany(Recipe, { through: Ingredient });
