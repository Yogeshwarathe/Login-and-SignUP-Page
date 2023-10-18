module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post('/singup',urlencodedParser,async(req,res)=>{
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
                                var gmail1 = req.body.Gmail;
                                var token = jwt.sign(gmail1,"SECRETKEY")
                                res.cookie('token', token, { maxAge: 900000, httpOnly: true });
                                // res.send('Cookie set');
                                Function_call.login_page_function(res)
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
