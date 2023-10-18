module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post('/singup',urlencodedParser,async(req,res)=>{
        var gmail1 = req.body.Gmail;
        var NewToken = Function_call.Token_janreter_fun(gmail1,jwt)
            // console.log("token",NewToken);

        if(req.body.Name != undefined && req.body.Gmail != undefined && req.body.Number != undefined && req.body.Password != undefined){
            knex
                .select("*")
                .from('UserInfo')
                .where("Gmail",req.body.Gmail)
                .then((RowsData) => {
                    if(RowsData[0] != undefined){
                        if(RowsData[0].Name == req.body.Name){
                            console.log("All ready have a account");
                            res.end(JSON.stringify("All ready have a account"));
                        }
                    }else{
                        knex('UserInfo')
                            .insert(req.body)
                            .then(()=>{
                                Function_call.send_token_to_cookies(res,NewToken);
                                console.log("Sign Up sucsesfull")
                                // res.end(JSON.stringify("Sign Up sucsesfull"));
                            })
                        }
            })
        }else{
            console.log("undifined text");
        }
    })
}
