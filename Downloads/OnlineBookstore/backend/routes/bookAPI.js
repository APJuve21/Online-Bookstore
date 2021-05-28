var express = require('express');
var router = express.Router();

var Book = require('../models/book.js');

router.post('/', function(req, res, next) {
    var bookid = req.body.BookId;
    var bookname = req.body.BookName;
    var publisher = req.body.Publisher;
    var category = req.body.Category;
    var lang = req.body.Lang;
    var author = req.body.Author;
    var description = req.body.Description;
    var price = req.body.Price;
    var published= req.body.Published;
    var newarrival = req.body.NewArrival;

    Book.create({bookid: bookid, bookname: bookname, publisher: publisher, 
        category: category, lang: lang, author: author, description: description,
        price: price, published: published, newarrival: newarrival} , function (err, book){
        if (err){
            res.status(400).send('Error Book');
            console.log(errs)
            return;
        }
        res.status(200).json(book);
        console.log("#############################");
        console.log("New Book Loaded: " + bookname);
        console.log("#############################");
    });
});

module.exports = router;
