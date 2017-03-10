var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://innobank:innobank@ds123410.mlab.com:23410/innobank', [" fundtransfer"]);
router.post("/fundtransfer",function(req,res){
console.log(req.body);
// db.fundtransfer.save(req.body,function(err,data){
//     console.log(data);
// })
res.json("hai");
})
module.exports = router