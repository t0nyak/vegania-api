import Sequelize, { Model } from 'sequelize';
import { db } from './db';
import { Food } from './food';

const uuid = require('uuid/v4');

export class Nutrient extends Model {}
Nutrient.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUIDV4,
      defaultValue: uuid()
    },
    name: Sequelize.STRING
  },
  { sequelize: db, modelName: 'nutrient' }
);

Nutrient.belongsToMany(Food, { through: 'FoodNutrient' });
