var mongoose = require('mongoose');
var connection = require("./userProfileSchema");
var nodemailer=require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
exports.getNewAccounts = function(req,res){
    var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'prudhviraju.mantena@gmail.com', // my mail
        pass: 'prudhvi229'
    }
    }));
    var mailOptions = {
    from: 'Fred Foo ✔ <innobankindia@gmail.com>', // sender address 
    to: 'prudhviraju.mantena@gmail.com', // the same mail = want to send it to myself
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world ✔', // plaintext body 
    html: '<b>Hello world ✔</b>' // html body 
};
    transport.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
        res.json({'docs':'success'})
}

exports.acceptUser = function(req,res){
    var accountNumber = req.body.aadhar;
    var Name = req.body.name
    var numToStr = accountNumber.toString();
    var lastFive = numtostr.substr(numtostr.length - 4);
    var firstFour = Name.replace(/ /g,'').slice(0,4);
    var userID = firstFour + lastFive;
    connection.update({aadharcardNumber: accountNumber},{$set:{'accountNumber':accountNumber,'isActivated':true,'userID':userID}},function(err,docs){
        if(err){
            res.json('')
        }else{
            var smtpTransport = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                auth: {
                    user: "innobankindia@gmail.com",
                    pass: "innobank"
                }
            });

        // setup email data with unicode symbols
        var mailOptions={
            to : docs[0].email,
            subject : 'Account Creation',
            html : "Dear Customer,<br><br>Your InnoBank Account has been Successfully created<br>your Account Number: "+accountNumber+"<br>User ID: "+userID+"<br>You Can Register for online banking at <a href=http://localhost:4200/register>Register</a>",
            }
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
        console.log(error);
        res.end("error");
        }else{
        console.log("Message sent: " + response.message);
        res.end("sent");
        }
        });
        }
    })
}


