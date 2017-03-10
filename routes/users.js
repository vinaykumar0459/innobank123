var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller=require("../controllers/userActions");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', function(req, res, next) {
  //res.send('respond with a resource');
  // console.log("hai");
  // console.log(req.body);
   controller.createAccount(req,res);
  // res.json("data")
})

module.exports = router;
