const env = require('dotenv').config()


// This is need for database open
var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: process.env.MYSQL_PORT,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME
    }
})



// const knex = require('knex')({
//     client: 'mysql', // Use the appropriate database client
//     connection: {
//       host:  '127.0.0.1',
//       user: process.env.MYSQL_PORT
//     },
//     password:{
//         password: process.env.PASSWORD,
//         database: process.env.DATABASE_NAME
//     },
//   });
  



// // This for create table if table not exist in databes
// knex.schema.hasTable('UserInfo').then(function(exists){
//     if (!exists){
//         return knex.schema.createTable('UserInfo', function(table){
//             table.increments("UserId").primary();
//             table.string('Name')
//             table.string('Gmail')
//             table.integer('Number')
//             table.integer('Password')
            
//         }).then(()=>{
//             console.log("User Information Table created sucesesful ");
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }else{
//         console.log('User Information Table exists in databases');
//     }
// });












// module.exports = knex;