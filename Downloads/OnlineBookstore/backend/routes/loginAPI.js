const router = require('express').Router();
const User = require('../models/user.js');

router.post('/', function(req, res, next) {
  var userid = req.body.userid;
  var pw = req.body.pw;
  console.log("saasdd", userid)

  User.find({ "userid": userid} , function(err, user) {
    if (err) {
      res.status(400).send('Error');
    } else {
      if (user.length == 0) {
        res.status(400).send(('Invalid login, please login again'));
      } else if (user.length != 0 && user[0].pw != pw) {
        res.status(400).send('Unauthorized access');
      } else {
        res.status(200).json(user);
        console.log("#############################");
        console.log("New Login: " + user[0].userid);
        console.log("#############################");
      }
    }
  });
});

module.exports = router;