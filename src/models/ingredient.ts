import { Model, DataTypes } from 'sequelize';
import { db } from './db';

export class Ingredient extends Model {}
Ingredient.init(
  {
    unit: DataTypes.STRING,
    amount: DataTypes.FLOAT
  },
  { sequelize: db, modelName: 'ingredient' }
);
