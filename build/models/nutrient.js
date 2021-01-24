"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("./food");
const sequelize_typescript_1 = require("sequelize-typescript");
const food_nutrient_1 = require("./food-nutrient");
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
let Nutrient = class Nutrient extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        defaultValue: uuid()
    }),
    sequelize_typescript_1.PrimaryKey
], Nutrient.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column
], Nutrient.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column
], Nutrient.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => food_1.Food, () => food_nutrient_1.FoodNutrient)
], Nutrient.prototype, "foodsWith", void 0);
Nutrient = __decorate([
    sequelize_typescript_1.Table
], Nutrient);
exports.Nutrient = Nutrient;
