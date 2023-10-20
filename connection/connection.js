const nodemailer = require('nodemailer'); // use for sending gmail
const otpGenerator = require('otp-generator') // OTP generator



function sign_up_page_function(res){
    res.sendFile(__dirname + "/" + "/HtmlFile/singUpPage.html");
}


function login_page_function(res){
    res.sendFile(__dirname + "/" + "/HtmlFile/loginPage.html");
}






async function Send_mail(GmailId,Subject1,Text1){
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_GMAIL,
            pass: process.env.USER_PASSWORD
        }
    });

    let mailDetails = {
        from: process.env.USER_GMAIL,
        to: GmailId,
        subject: Subject1,
        text: Text1
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
}

// Send_mail("ywarathe@gmail.com","OTP for cheng your password for api","This is your OTP : " + OTP_Generator());




// this is janreted OTP
function OTP_Generator(){
    return otpGenerator.generate(6,{
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false
     });
}
// console.log(OTP_Generator());



module.exports ={
    sign_up_page_function,
    login_page_function,
    Send_mail,
    OTP_Generator
};