var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const Book = require('../models/book.js');
var cors = require("cors");

router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

function getBook(req, res){
    //filter with sort etc.
    Book.find({})
    .exec((err, result) =>{
        res.send(result);
    });
}

router.get("/", getBook);

module.exports = router;