const mailer  = require("nodemailer");
const stp = require("nodemailer-smtp-transport");
//https://myaccount.google.com/lesssecureapps
const transpoter = mailer.createTransport(stp({
    service:"gmail",
    host: 'smtp.gmail.com',

    //secure:false,
    //port:587,
    auth:{
        user:"****** send mail from *******@gmail.com",
        pass:"******Your password**********"
    },
   /* tls:{
        rejectUnauthorized:false
    }*/
}))

const mailOptions={
    from:"*** send Mail from *****@gmail.com",
    to:["***** send Mail to ****@gmail.com","**** send Mail to *****@gmail.com"],
    subject:"mail from Bharath thatikona",
    text:"Hello , hi from Bharath"
}

transpoter.sendMail(mailOptions,function(err,result){
    if(err){
        console.log("error",err);
    }else{
        console.log("results",result);
    }
})