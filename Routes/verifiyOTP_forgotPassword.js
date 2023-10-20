module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post("/verifiyOTP_forgotPassword",urlencodedParser,async(req,res)=>{
        if(req.body.User_OTP != undefined && req.body.NewPassword){
            var cookiesOTP = req.cookies.token;
            jwt.verify(cookiesOTP,"SECRETKEY",(err, verifiedJwt) => {
                if(req.body.User_OTP == verifiedJwt){
                    knex
                        .select("*")
                        .from("UserInfo")
                        .where("Gmail",req.body.Gmail)          
                        .update({Password: req.body.NewPassword})
                        .then((data)=>{
                            if(data){
                                res.send("Your new password is cheng");
                            }else{
                                res.send("your OTP is not match");
                            }
                        })
                }else{
                    res.send("Wrong OTP try agen " + err);
                }
            })
        }
    })
}