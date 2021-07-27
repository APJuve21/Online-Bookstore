const express = require('express');
const mongoose = require('mongoose');

const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//connect to db
const mongo_uri = "mongodb+srv://username:password@cluster0.glil1.mongodb.net/bookstoreDB?retryWrites=true&w=majority";
mongoose.connect(mongo_uri, { useNewUrlParser: true }
, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

//Import Routes
//Dummy
const registerAPI = require('./routes/registerAPI');
const loginAPI = require('./routes/loginAPI');
const bookAPI = require('./routes/bookAPI');
const categoryAPI = require('./routes/categoryAPI.js');
const cartAPI = require('./routes/cartAPI.js');
//body parser reads the psot request on postman
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Route Middlewares
//when post register...go to api/user/register
app.use('/api/register', registerAPI);
app.use('/api/login', loginAPI);
app.use('/api/book', bookAPI);
app.use('/api/category', categoryAPI);
app.use('/api/cart', cartAPI);
app.use('/api/cart/delete', cartAPI);

//port 8000
app.listen(8000, () => console.log("service running"));