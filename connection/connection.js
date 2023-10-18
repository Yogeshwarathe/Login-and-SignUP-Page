function sign_up_page_function(res){
    res.sendFile(__dirname + "/" + "/HtmlFile/singUpPage.html");
}


function login_page_function(res){
    res.sendFile(__dirname + "/" + "/HtmlFile/loginPage.html");
}





module.exports ={
    sign_up_page_function,
    login_page_function    
};