const router = require('express').Router();
const User = require('../models/user.js');
const uuid = require('uuid');

router.post('/', function(req, res, next) {
  var userid = req.body.userid;
  var pw = req.body.pw;
  if (userid.length === 0||pw.length === 0){
    res.status(400).send("Please do not leave fields empty");
  };

    User.find({userid: userid}, function (err, user) {
      
      if (err) {
        console.log("HIHIHIH");
        res.status(400).send("Account already existed");
      } 
      
      else {
        console.log("HIHIHIH2");
        if (user.length != 0) {
          res.status(400).send("Account already existed");
        } 
        else {
          console.log("HIHIHIH3");
          User.create({userid: userid, pw: pw,  
              _001:0,
              _002:0,
              _003:0,
              _004:0,
              _005:0,
              _006:0,
              _007:0,
              _008:0,
              _009:0,
              _010:0,
              _011:0,
              _012:0
        }, function (err, user) {
          console.log("HIHIHIH65");
            if (err) {
              res.status(400).send('Error3');
              return;
            }
            res.status(200).json(user);
            console.log("#############################");
            console.log("New Registration: " + userid);
            console.log("#############################");
          }
          );
        }
      }
    });
});

module.exports = router;
