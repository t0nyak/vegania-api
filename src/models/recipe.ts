import { Model, DataTypes } from 'sequelize';
import { db } from './db';
import { Nutrient } from './nutrient';
import { Step } from './step';
import { Food } from './food';
import { Ingredient } from './ingredient';

const uuid = require('uuid/v4');

export class Recipe extends Model {}
Recipe.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUIDV4,
      defaultValue: uuid()
    },
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    duration: DataTypes.STRING
  },
  { sequelize: db, modelName: 'recipe' }
);

Recipe.hasMany(Step);
Recipe.belongsToMany(Food, { through: Ingredient });
