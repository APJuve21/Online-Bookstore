const router = require('express').Router();
const User = require('../models/user.js');
const Book = require('../models/book.js');

const bodyParser = require("body-parser");
var cors = require("cors");

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', function(req, res, next) {
    
    //Handle Add Order

    console.log(req.body)
    var ordersize = req.body.quantity
    var orderuser = req.body.currentuser
    var orderbookname = req.body.bookname
    var reference;

    if (ordersize== undefined||orderuser== undefined) {
        console.log('undefined order size or user');
    }
    else{
        Book.find({bookname: orderbookname}, function (err, book){
            if (err) {
                res.status(400).send('Book Index Error');
                return;
                }
            reference = "_"+book[0].bookid;


            User.updateMany(
                {userid: orderuser},
                {$inc: {[reference]: Number(ordersize)}},
                function(err, user){
                if (err){
                    res.status(400).send('error1');
                    return;
                }
                console.log("ref", reference)
                console.log(user)
            });
        });


        User.find({userid: orderuser}, function (err, show){
            if (err) {
                res.status(400).send('Book Index Error');
                return;
              }
            console.log(show[0]);
        });
    }


    //rerun post after
});


router.post('/delete', function(req, res, next) {
    var quantBlock = req.body.quantBlock;
    var bookidBlock =  req.body.bookidBlock;
    var useridBlock = req.body.useridBlock;
    User.updateMany(
        {userid: useridBlock},
        {$set: {[bookidBlock]: quantBlock}},
        function(err, user){
        if (err){
            res.status(400).send('error1');
            return;
        }
        console.log(user)
    });


});

router.get("/", getUserCart);

function getUserCart(req, res){
    //filter with sort etc.
    User.find({})
    .exec((err, result) =>{
        console.log(result)
        res.send(result);
    });
}

module.exports = router;