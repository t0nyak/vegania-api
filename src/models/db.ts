// const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize-typescript';

export const db = new Sequelize({
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

db.authenticate()
  .then(() => {
    console.log('Connection established');
  })
  .catch((err: any) => {
    console.error(`Unable to connect to DB: ${err}`);
  });
