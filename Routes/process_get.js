module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.get('/process_get',urlencodedParser,async(req,res)=>{
        Function_call.sign_up_page_function(res);
    })
   
}