function sign_up_page_function(res){
    res.sendFile(__dirname + "/" + "/HtmlFile/singUpPage.html");
}


function login_page_function(res){
    res.sendFile(__dirname + "/" + "/HtmlFile/loginPage.html");
}



// this function use to token janret
function Token_janreter_fun(gmail,jwt){
    const Token = jwt.sign(gmail,"SECRETKEY")
    // console.log(NewToken);
    return Token
}

function send_token_to_cookies(res,NewToken){
    var token_to_string = NewToken.toString()
    // console.log(NewToken);
    res.cookie('JWT_key',token_to_string,{expires: new Date(Date.now() + 1000000),httpOnly: true},((err)=>{
        try{
            console.log("Token send to cookies");
        }catch(err){
            console.log(err);
        }
    }));
}


function get_token_to_cookies(req){
    var TokenCookies = req.cookies.JWT_key;
    console.log(TokenCookies);
    return TokenCookies
}








module.exports ={
    sign_up_page_function,
    login_page_function,
    Token_janreter_fun,
    send_token_to_cookies,
    get_token_to_cookies    
};