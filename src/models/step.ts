import { Model, DataTypes } from 'sequelize';
import { db } from './db';
import { Recipe } from './recipe';

const uuid = require('uuid/v4');

export class Step extends Model {}
Step.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUIDV4,
      defaultValue: uuid()
    },
    desc: DataTypes.STRING,
    order: DataTypes.INTEGER
  },
  { sequelize: db, modelName: 'step' }
);

Step.belongsTo(Recipe);
