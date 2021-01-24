import {
  Table,
  Model,
  Column,
  ForeignKey,
  DataType
} from 'sequelize-typescript';
import { Food } from './food';
import { Nutrient } from './nutrient';

@Table
export class FoodNutrient extends Model<FoodNutrient> {
  @ForeignKey(() => Food)
  @Column
  foodId: string;

  @ForeignKey(() => Nutrient)
  @Column
  nutrientId: string;

  @Column({
    type: DataType.FLOAT
  })
  amount: number;

  @Column
  unit: string;
}
