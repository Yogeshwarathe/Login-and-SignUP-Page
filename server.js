var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());


// this is for mysql databases
const knex = require("./models/Databases.js");

const Function_call = require("./connection/connection.js");

// this is sinup page
var singupPage = express.Router();
app.use("/",singupPage);
require("./Routes/singup")(singupPage,urlencodedParser,Function_call,knex,jwt,cookieParser)

var process_get = express.Router();
app.use("/",process_get);
require("./Routes/process_get")(process_get,urlencodedParser,Function_call,knex,jwt,cookieParser)

var login_html_page = express.Router();
app.use("/",login_html_page);
require("./Routes/login_html_page")(login_html_page,urlencodedParser,Function_call,knex,jwt,cookieParser)

var login = express.Router();
app.use("/",login);
require("./Routes/login")(login,urlencodedParser,Function_call,knex,jwt,cookieParser)

var forget_password = express.Router();
app.use("/",forget_password);
require("./Routes/forget_password")(forget_password,urlencodedParser,Function_call,knex,jwt,cookieParser)


var server = app.listen(process.env.Server_number,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("http://127.0.0.1:",port,"/process_get");
})