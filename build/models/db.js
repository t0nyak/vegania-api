"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Sequelize = require('sequelize');
const sequelize_typescript_1 = require("sequelize-typescript");
exports.db = new sequelize_typescript_1.Sequelize({
    host: 'localhost',
    database: 'vegania-db',
    username: 't0nyak',
    password: 'v3g4n1a-t0nyak-DB',
    dialect: 'postgres',
    storage: ':memory:',
    models: [__dirname + '/models'],
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
exports.db.authenticate()
    .then(() => {
    console.log('Connection established');
})
    .catch((err) => {
    console.error(`Unable to connect to DB: ${err}`);
});
