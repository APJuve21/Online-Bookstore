import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import axios from "axios";
import './details.css';

import book_001 from '../images/book_001.jpeg'
import book_002 from '../images/book_002.jpeg'
import book_003 from '../images/book_003.jpeg'
import book_004 from '../images/book_004.jpeg'
import book_005 from '../images/book_005.jpeg'
import book_006 from '../images/book_006.jpeg'
import book_007 from '../images/book_007.jpeg'
import book_008 from '../images/book_008.jpeg'
import book_009 from '../images/book_009.jpeg'
import book_010 from '../images/book_010.jpeg'
import book_011 from '../images/book_011.jpeg'
import book_012 from '../images/book_012.jpeg'


export default function Details(props) {
    console.log(book_001, book_002, book_003, book_004, book_005, 
        book_006, book_007, book_008, book_009, book_010, book_011, book_012)

    var bookselection = localStorage.getItem("bookselection");
    const [cartNumber, SetCartNumber] = useState(localStorage.getItem("cartNumber"))
    const [arrow, SetArrow] = useState(">")

    var [current_userid, setUserid] = useState("guest");
    const[orderQuantity, setOrderQuantity] = useState("1");
    const history = useHistory();

    if (bookselection !== null){



        var BookArrayDetail = [];
        const headers = {
            "Content-Type": "application/json",
        };



        axios
        .get(`http://localhost:8000/api/category`, { headers })
        .then((res) => {
            var k;
            for (k= 0; k < res.data.length; k++){
                if (res.data[k].bookname ===  bookselection){
                    BookArrayDetail.push(new BookBlueprint(res.data[k].bookid, res.data[k].bookname, res.data[k].publisher, 
                        res.data[k].category, res.data[k].lang, res.data[k].author, res.data[k].description, 
                        res.data[k].price, res.data[k].published, res.data[k].newarrival));
                }
            }
            var bookname = BookArrayDetail[0].bookname;
            localStorage.setItem("bookname", bookname);
            var author= BookArrayDetail[0].author;
            var published= BookArrayDetail[0].published;
            var publisher= BookArrayDetail[0].publisher;
            var category= BookArrayDetail[0].category;
            var lang= BookArrayDetail[0].lang;
            var description= BookArrayDetail[0].description;
            var price= BookArrayDetail[0].price;
            var bookid = BookArrayDetail[0].bookid;
            
            if (bookid === "001"){
                document.getElementById('bookimage').src = "/static/media/book_001.b936bb7c.jpeg"

            }
            else if (bookid === "002"){
                document.getElementById('bookimage').src = "/static/media/book_002.175124c9.jpeg"

            }
            else if (bookid === "003"){
                document.getElementById('bookimage').src = "/static/media/book_003.843035e2.jpeg "
            }
            else if (bookid === "004"){
                document.getElementById('bookimage').src = "/static/media/book_004.2ac4333a.jpeg "

            }
            else if (bookid === "005"){
                document.getElementById('bookimage').src = "/static/media/book_005.6cdb4499.jpeg "

            }
            else if (bookid === "006"){
                document.getElementById('bookimage').src = "/static/media/book_006.5a7818c3.jpeg "

            }
            else if (bookid === "007"){
                document.getElementById('bookimage').src = "/static/media/book_007.ec098aa1.jpeg"

            }
            else if (bookid === "008"){
                document.getElementById('bookimage').src = "/static/media/book_008.c81c6b6a.jpeg"

            }
            else if (bookid === "009"){
                document.getElementById('bookimage').src = "/static/media/book_009.2fdd3424.jpeg "

            }
            else if (bookid === "010"){
                document.getElementById('bookimage').src = "/static/media/book_010.f39b451e.jpeg"

            }
            else if (bookid === "011"){
                document.getElementById('bookimage').src = "/static/media/book_011.63c64e43.jpeg "

            }
            else if (bookid === "012"){
                document.getElementById('bookimage').src = "/static/media/book_012.df25b41d.jpeg"

            }
            

            document.getElementById("bookname").innerHTML = "Bookname: "+bookname;
            document.getElementById("linkDetails").innerHTML = bookname;
            document.getElementById("author").innerHTML = "Author: "+author;
            document.getElementById("published").innerHTML = "Published: "+published;
            document.getElementById("publisher").innerHTML = "Publisher: "+publisher;
            document.getElementById("category").innerHTML = "Category: "+category;
            document.getElementById("lang").innerHTML = "Language: "+lang;
            document.getElementById("description").innerHTML = "Description: "+description;
            document.getElementById("price").innerHTML = "Price: $"+price;

            
        })
        .catch((err) => {
            console.log("Wait")
        });

        }

      return (
        <div id = "DetailPage">
            <Link to = "/">
                <button id = "searchButton">Search</button>
                <input id = "searchBox" placeholder = "Keyword(s)"></input>
            </Link>
            <div id = "linkIcons">
                <Link to = "/register">
                        <button id = "signinButton">Sign In</button>
                    </Link>
                    <Link to = "/login">
                        <button id = "loginButton">Login</button>
                    </Link>
                    <div id = "cartLink">
                        <Link to = "/cart">
                            <button id = "cartButton">Cart</button>
                        </Link>
                            <div id = "cartNumber">{cartNumber}</div>
                    </div>
            </div>
            <div id = "linkNav">
                <Link to = "/">
                    <div id = "linkHome">Home</div>
                </Link>
                <div id = "arrow">{arrow}</div>
                <Link to = "/details">
                    <div id = "linkDetails"></div>
                </Link>
            </div>
            <h3>Details</h3>
            <div id = "myBook">
                    <div id = "bookname"></div>
                    <div id = "bookContent">
                    <div id = "myGeneral">
                        <img id = "bookimage" alt = "IMAGE HERE"/>
                    </div>
                    <div id = "myOther">
                        <div id = "author"></div>
                        <div id = "published"></div>
                        <div id = "publisher"></div>
                        <div id = "category"></div>
                        <div id = "lang"></div>
                        <div id = "description"></div>
                        <div id = "price"></div>
                    </div>
                    </div>
                    <div id = "order"> Order:
                        <input id = "orderBox" type = "number" placeholder = {orderQuantity} value = {orderQuantity} 
                        onChange = {(event) => {
                            setOrderQuantity(event.target.value);}}>
                        </input>
                        <button id = "orderButton" onClick = {(event) => {
                            setOrderQuantity(event.target.value);
                            console.log('A form was submitted: ' + orderQuantity);

                            SetCartNumber(String(Number(cartNumber)+Number(orderQuantity)));
                            
                            var onboardUser = localStorage.getItem("onboardUser")
                            if (onboardUser !== "guest"){
                                setUserid(onboardUser)
                            };

                            const orderbody = JSON.stringify({
                                quantity: orderQuantity,
                                currentuser: onboardUser,
                                bookname: bookselection
                              });

                            const headers = {
                                "Content-Type": "application/json",
                            };

                            console.log(orderbody);
                            axios
                            .post("http://localhost:8000/api/cart", orderbody, { headers })
                            .then((res) => {
                                if (res.status === 200) {
                                history.push("/");
                                } else {
                                const error = new Error(res.error);
                                throw error;
                                }
                            })
                            .catch((err) => {
                                alert(err.response.data);
                            });
                            }}>Add to Cart</button>
                    </div>
            </div>
        </div>
    );
}

  function BookBlueprint(bookid, bookname, publisher, category, lang, author,
    description, price, published, newarrival) {
        this.bookid = bookid;
        this.bookname = bookname;
        this.publisher = publisher;
        this.category = category;
        this.lang = lang;
        this.author = author;
        this.description = description;
        this.price = price;
        this.published = published;
        this.newarrival = newarrival;
  }