module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post('/login',urlencodedParser,async(req,res)=>{
        if(req.body.Gmail != undefined && req.body.Password != undefined){
            // console.log(req.body);
            
            knex
                .select("*")
                .from('UserInfo')
                .where("Gmail",req.body.Gmail)
                .then((RowsData) => {
                    // console.log(RowsData);
                    if(RowsData[0] != undefined){
                        if(RowsData[0].Password == req.body.Password){
                            console.log("Login susessful");
                            res.end(JSON.stringify("login susessful"));
                        }else{
                            res.end(JSON.stringify("wrong password "));
                        }
                    }else{
                        res.end(JSON.stringify("go to SinUp page"))
                    }
            })
        }else{
            res.end(JSON.stringify("undifind user gmail and password"));
        }
    })
}
