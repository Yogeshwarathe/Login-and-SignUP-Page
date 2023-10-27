const env = require('dotenv').config()



// objection.js file
const {Model} = require('objection');

// conect databases;
var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: process.env.MYSQL_PORT,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME
    }
})


Model.knex(knex);

module.exports = knex;
