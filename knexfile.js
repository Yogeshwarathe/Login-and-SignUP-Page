module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        database: "DB",
        user: "root",
        password: "Password@123",
      },
      migrations: {
        directory: './db/migrations', // Set the directory where your migration files will be stored
      },
    },
    // use to migration
    // npx knex migrate:make migration_name
  };


