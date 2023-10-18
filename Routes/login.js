module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post('/login',urlencodedParser,async(req,res)=>{
        if(req.body.Gmail != undefined && req.body.Password != undefined){
            var TokenCookies = req.cookies.token;
            // console.log(TokenCookies);
            jwt.verify(TokenCookies,"SECRETKEY",(err, verifiedJwt) => {
                if(err){
                    res.send(err.message);
                    console.log(err);
                }else{
                    // console.log(verifiedJwt);
                    knex
                        .select("*")
                        .from('UserInfo')
                        .where("Gmail",verifiedJwt)
                        .then((RowsData)=>{
                            console.log(RowsData);
                            if(RowsData != undefined){
                                if(RowsData[0].Password == req.body.Password){
                                    res.send(RowsData);
                                }else{
                                    res.send("Wrong Password")
                                }
                            }else{
                                res.send("Time Over, Going to sing up page");
                            }
                        })
                }
              })
        }else{
            res.send(JSON.stringify("undifind user gmail and password"));
        }
    })
}
