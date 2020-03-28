const Sequelize = require('sequelize');

export const db = Sequelize('vegania-db', 't0nyak', 'v3g4n1a-t0nyak-DB', {
  host: 'localhost',
  dialect: 'postgres',
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
