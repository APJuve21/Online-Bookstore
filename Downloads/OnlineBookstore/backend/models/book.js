const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookid: { type: String, required: true},
    bookname: { type: String, required: true},
    publisher: { type: String, required: true },
    category: { type: String, required: true},
    lang: { type: String, required: true },
    author: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: String, required: true},
    published: { type: String, required: true },
    newarrival: { type: String, required: true },
});

module.exports = mongoose.model('Book', bookSchema);