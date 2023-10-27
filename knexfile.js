const env = require('dotenv').config()

module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.MYSQL_PORT,
        password: process.env.PASSWORD,
      },
      migrations: {
        directory: './db/migrations', // Set the directory where your migration files will be stored
      },
    },
    // use to migration
    // npx knex migrate:make migration_name
  };

