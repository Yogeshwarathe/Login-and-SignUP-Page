const express = require('express');
var app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// this is for mysql databases
const knex = require("./models/Databases.js");
const UserInfo = require("./models/user_tables");





// here start orm
const userRouter = require("./Routes/singup");


//Routes
app.use(userRouter);




var server = app.listen(3006,function(){
    console.log("server is working")
    // npm run test
})





