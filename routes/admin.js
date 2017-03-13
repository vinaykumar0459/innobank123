var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var controller=require("../controllers/adminActions");
/* GET users listing. */
router.get('/', function(req, res, next) {
   controller.getNewAccounts(req,res);
});

router.post('/',function(req,res,next){
    controller.acceptUser(req,res);
})
// router.post('/', function(req, res, next) {
  
// })

module.exports = router;
