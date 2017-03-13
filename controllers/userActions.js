var mongoose = require('mongoose');
var connection = require("./userProfileSchema");

exports.createAccount = function(req,res){
    var data = connection({
    firstName: req.body.fname,
    lastName: req.body.lname,
    email:  req.body.email,
    mobileNumber: req.body.mobile,
    gender: req.body.gender,
    dob :  req.body.dob,
    address: req.body.address,
    pancardNumber: req.body.pan,
    aadharcardNumber: req.body.aadhar,
    createdDate: '',
    isActivated:false,
   });
   data.save(function(err,data){
       if(err){
           throw err;
           console.log(err);
       }else{
           console.log("Success");
           res.json({data:"Success"});

       }
   })
}

exports.checkAccount = function(req,res){
    var mobile = req.params.mobile;
    var uid = req.params.uid;
    connection.find({$and:[{userID:uid},{mobileNumber: mobile}]},function(err,docs){
        console.log(docs)
        if(err){
            res.json({"message":"provide the right phone number","code":99});
        }else if(docs == ''){
            res.json({"message":"Account doesn't exits with provided User ID and Mobile Number","code":100});
        }else if(docs[0].isAdmin == true){
            res.json({"message":"Account doesn't exits with provided User ID and Mobile Number","code":110}); 
        }
        else if(docs[0].isRegistered == true){
            res.json({"message":"User already registered with provided User ID and Mobile Number","code":101}); 
        }else{
            res.json({"message":'',"code":102});
        }
        
    })
}

exports.savePassword = function(req,res){
    var uid = req.body.uid;
    var mobile = req.body.mobile;
    var confpassword = req.body.confpassword;
    var password = req.body.password;
    if( password ===  confpassword){
        connection.update({$and:[{userID:uid},{mobileNumber: mobile}]},{$set:{'password':password,'isRegistered':true}},function(err,docs){
			if(err) {  
                res.json({'message':'Error in updating password try again','code':104});  
	        }else{
                res.json({'message':'','code':105});
            } 
	    });
    }else{
        res.json({"message":"passwords didn't match","code":103});
    }
    // res.json
}

exports.checkUser = function(req,res){
   connection.find({ userID: req.body.userID,
    password: req.body.password},function(err,data){
       if(err){
           throw err;
           console.log(err);
       }else{          
           if(!data.length){
              res.json({data:"wrong credentials", status:0});
           }
           else if(data.length){
            res.json({data:"Success", status:1});
            req.session.user = data;
            console.log(req.session.user);
           }

       }
   });
}