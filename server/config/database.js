require('dotenv').config();
const config = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
  },
};

module.exports = config;
