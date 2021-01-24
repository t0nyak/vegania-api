//import Sequelize, { Model } from 'sequelize';
import { db } from './db';
import { Food } from './food';
import {
  Table,
  PrimaryKey,
  Column,
  BelongsToMany,
  Model
} from 'sequelize-typescript';
import { FoodNutrient } from './food-nutrient';

const uuid = require('uuid/v4');

// export class Nutrient extends Model {}
// Nutrient.init(
//   {
//     id: {
//       primaryKey: true,
//       allowNull: false,
//       type: Sequelize.UUIDV4,
//       defaultValue: uuid()
//     },
//     name: Sequelize.STRING
//   },
//   { sequelize: db, modelName: 'nutrient' }
// );

// Nutrient.belongsToMany(Food, { through: 'FoodNutrient' });

@Table
export class Nutrient extends Model<Nutrient> {
  @Column({
    defaultValue: uuid()
  })
  @PrimaryKey
  id: string;

  @Column
  name: string;

  @Column
  type: string;

  @BelongsToMany(
    () => Food,
    () => FoodNutrient
  )
  foodsWith: Food[];
}
