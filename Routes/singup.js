var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
const UserService = require("../services/user_functon");
const Services = new UserService();


// landing page
router.get("/", (req, res) => {
  res.send({ success: "Welcome on the home page!" });
});

router.post("/signup",async (req,res)=>{
    // console.log(req.body);
    await Services.find_user(req.body.Gmail)
    .then((Data)=>{ 
        if(Data.length == 0){
            Services.createUser(req.body);
            var token = jwt.sign(req.body.Gmail,"SECRETKEY");
            // console.log(token);
            res.cookie('token', token, { maxAge: 900000, httpOnly: true });
            res.send("data insert sussesfull");
            console.log("data insert sussesfull")
            
        }else{
            res.send("All ready have");
            console.log("All ready have")
        }
    }).catch((err)=>{
        console.log(err);
    })

})



router.post("/login",async (req,res)=>{
    if(req.body.Gmail != undefined && req.body.Password != undefined){
        var TokenCookies = req.cookies.token;
        jwt.verify(TokenCookies,"SECRETKEY",(err, verifiedJwt) => {
            if(err){
                res.send("All rady user login");
                console.log(err);
            }else(
                res.send("Login susesful")
            )
        })
    }else{
        res.send("Gmail and password are required")
    }
})



module.exports = router;
