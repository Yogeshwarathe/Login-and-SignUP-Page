module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.get('/login_page',urlencodedParser,async(req,res)=>{
        Function_call.login_page_function(res);
    })

}