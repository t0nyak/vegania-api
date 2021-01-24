"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const nutrient_1 = require("./nutrient");
const food_nutrient_1 = require("./food-nutrient");
const uuid = require('uuid/v4');
// export class Food extends Model {}
// Food.init(
//   {
//     id: {
//       primaryKey: true,
//       allowNull: false,
//       type: DataTypes.UUIDV4,
//       defaultValue: uuid()
//     },
//     name: DataTypes.STRING,
//     type: DataTypes.STRING
//   },
//   { sequelize: db, modelName: 'food' }
// );
// Food.belongsToMany(Nutrient, { through: 'FoodNutrient' });
// Food.belongsToMany(Recipe, { through: Ingredient });
let Food = class Food extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.IsUUID(4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        defaultValue: uuid()
    })
], Food.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column
], Food.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column
], Food.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => nutrient_1.Nutrient, () => food_nutrient_1.FoodNutrient)
], Food.prototype, "nutrients", void 0);
Food = __decorate([
    sequelize_typescript_1.Table
], Food);
exports.Food = Food;
