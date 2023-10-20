module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post("/forget_password",urlencodedParser,async(req,res)=>{
        if(req.body.Gmail != undefined){
            var SEND_OTP = Function_call.OTP_Generator();
            // console.log(SEND_OTP);
            Function_call.Send_mail(req.body.Gmail,"OTP for cheng your password for api","This is your OTP : " + SEND_OTP);
            var token = jwt.sign(SEND_OTP,"SECRETKEY")
            // console.log(token);
            res.cookie('token', token, { maxAge: 900000, httpOnly: true });
            res.send("OTP send to youser ");
            
        }
    })
}