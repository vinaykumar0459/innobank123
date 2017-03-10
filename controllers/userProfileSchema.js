var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://innobank:innobank@ds123410.mlab.com:23410/userdata');

var userregisterSchema = mongoose.Schema({
 firstName: String,
    lastName:String,
    email: String,
    password:String,
    mobileNumber:Number,
    gender:String,
    dob : Date,
    userID:String,
    address:String,
    pancardNumber:String,
    aadharcardNumber:String,
    createdDate:Date,
    isRegistered:Boolean,
    isActivated:Boolean, 
    transfered:[{amount : Number, date : Date, to : Number}],
    recieved:[{amount : Number, date : Date, from : Number}],

});

var user = mongoose.model("register",userregisterSchema);
module.exports = user;