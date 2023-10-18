const env = require('dotenv').config()
// console.log(process.env.PASSWORD);

//This is need for database open
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: process.env.DB_password,
        database: "DB"
    }
})



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












module.exports = knex;