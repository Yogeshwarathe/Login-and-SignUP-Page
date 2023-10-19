module.exports = (app,urlencodedParser,Function_call,knex,jwt,cookieParser)=>{
    app.post("/forget_password",urlencodedParser,async(req,res)=>{
        if(req.body.Gmail != undefined){
            knex
                .select("*")
                .from("UserInfo")
                .where("Gmail",req.body.Gmail)          
                .update({Password: req.body.NewPassword})
                .then((data)=>{
                    if(data){
                        res.send("Your new password is cheng");
                    }else{
                        res.send("your gmail id not match");
                    }
                })
        }
    })
}