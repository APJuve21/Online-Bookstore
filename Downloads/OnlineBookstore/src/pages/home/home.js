import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './home.css';

export default function Home(props) {
    var onboardUser = localStorage.getItem("onboardUser");
    const [cartNumber, SetCartNumber] = localStorage.getItem("cartNumber")
    console.log(onboardUser);
    //const [category] = useState("");
    ShowBookInfo();
    ShowCategory();

    
    return(
        <div id = "HomePage">
        <div id = "combine">
            <div id = "searchBar">
                <input id = "searchBox" type = "text" placeholder = "Keyword(s)"></input>
                <button id = "searchButtonHome" onClick = {searchKeyword}>Search</button>
            </div>
            <div id = "linkIcons">
                <Link to = "/register">
                        <button id = "signinButton">Register</button>
                    </Link>
                    <a id = "logmode" href = "/login">
                        <button id = "loginButton">Sign In</button>
                    </a>
                    <div id = "cartLinkHome">
                        <Link to = "/cart">
                            <button id = "cartButtonHome">Cart</button>
                        </Link>
                            <div id = "cartNumber">{cartNumber}</div>
                    </div>
            </div>
            <div id = "linkNav">
                <Link to = "/">
                    <div id = "linkHome">Home</div>
                </Link>
                <div id = "arrow"></div>
                <Link to = "/">
                    <div id = "linkDetails"></div>
                </Link>
            </div>
        </div>
            <div id = "myBookCatBox">
            <div id = "myCategory">
                <h3>Category</h3>
                <div id = "myCategory0" onClick = {Category0Select}></div>
                <div id = "myCategory1" onClick = {Category1Select}></div>
                <div id = "myCategory2" onClick = {Category2Select}></div>
                <div id = "myCategory3" onClick = {Category3Select}></div>
            </div>
            <div id = "myBook">
                <div id = "BookChunk">
                    <div id = "sortChunk">
                    <div id = "allTitle">All Books</div>
                    <button id = "sortButton" onClick = {PriceHighest}></button>
                    </div>
                </div>
                <div id = "Book">
                <div id = "Book0">
                    <div id = "newarrival0"></div>
                    <div id = "bookid0"></div>
                    <img id = "bookimage0" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname0" onClick = {PullDetails0}></div>
                    </Link>
                    <div id = "author0"></div>
                    <div id = "publisher0"></div>
                    <div id = "price0"></div>
                </div>
                <div id = "Book1">
                    <div id = "newarrival1"></div>
                    <div id = "bookid1"></div>
                    <img id = "bookimage1" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname1" onClick = {PullDetails1}></div>
                    </Link>
                    <div id = "author1"></div>
                    <div id = "publisher1"></div>
                    <div id = "price1"></div>
                </div>
                <div id = "Book2">
                    <div id = "newarrival2"></div>
                    <div id = "bookid2"></div>
                    <img id = "bookimage2" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname2" onClick = {PullDetails2}></div>
                    </Link>
                    <div id = "author2"></div>
                    <div id = "publisher2"></div>
                    <div id = "price2"></div>
                </div>
                <div id = "Book3">
                    <div id = "newarrival3"></div>
                    <div id = "bookid3"></div>
                    <img id = "bookimage3" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname3" onClick = {PullDetails3}></div>
                    </Link>
                    <div id = "author3"></div>
                    <div id = "publisher3"></div>
                    <div id = "price3"></div>
                </div>
                <div id = "Book4">
                    <div id = "newarrival4"></div>
                    <div id = "bookid4"></div>
                    <img id = "bookimage4" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname4" onClick = {PullDetails4}></div>
                    </Link>
                    <div id = "author4"></div>
                    <div id = "publisher4"></div>
                    <div id = "price4"></div>
                </div>
                <div id = "Book5">
                    <div id = "newarrival5"></div>
                    <div id = "bookid5"></div>
                    <img id = "bookimage5" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname5" onClick = {PullDetails5}></div>
                    </Link>
                    <div id = "author5"></div>
                    <div id = "publisher5"></div>
                    <div id = "price5"></div>
                </div>
                <div id = "Book6">
                    <div id = "newarrival6"></div>
                    <div id = "bookid6"></div>
                    <img id = "bookimage6" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname6" onClick = {PullDetails6}></div>
                    </Link>
                    <div id = "author6"></div>
                    <div id = "publisher6"></div>
                    <div id = "price6"></div>
                </div>
                <div id = "Book7">
                    <div id = "newarrival7"></div>
                    <div id = "bookid7"></div>
                    <img id = "bookimage7" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname7" onClick = {PullDetails7}></div>
                    </Link>
                    <div id = "author7"></div>
                    <div id = "publisher7"></div>
                    <div id = "price7"></div>
                </div>
                <div id = "Book8">
                    <div id = "newarrival8"></div>
                    <div id = "bookid8"></div>
                    <img id = "bookimage8" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname8" onClick = {PullDetails8}></div>
                    </Link>
                    <div id = "author8"></div>
                    <div id = "publisher8"></div>
                    <div id = "price8"></div>
                </div>
                <div id = "Book9">
                    <div id = "newarrival9"></div>
                    <div id = "bookid9"></div>
                    <img id = "bookimage9" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname9" onClick = {PullDetails9}></div>
                    </Link>
                    <div id = "author9"></div>
                    <div id = "publisher9"></div>
                    <div id = "price9"></div>
                </div>
                <div id = "Book10">
                    <div id = "newarrival10"></div>
                    <div id = "bookid10"></div>
                    <img id = "bookimage10" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname10" onClick = {PullDetails10}></div>
                    </Link>
                    <div id = "author10"></div>
                    <div id = "publisher10"></div>
                    <div id = "price10"></div>
                </div>
                <div id = "Book11">
                    <div id = "newarrival11"></div>
                    <div id = "bookid11"></div>
                    <img id = "bookimage11" alt = "IMAGE HERE"/>
                    <Link to = "/details">
                        <div id = "bookname11" onClick = {PullDetails11}></div>
                    </Link>
                    <div id = "author11"></div>
                    <div id = "publisher11"></div>
                    <div id = "price11"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );
}


function ShowCategory(){
    var category = []
    var BookArray = [];
    const headers = {
        "Content-Type": "application/json",
      };

    axios
    .get(`http://localhost:8000/api/category`, { headers })
    .then((res) => {
        var k;
        for (k= 0; k < res.data.length; k++){
            BookArray.push(new BookBlueprint(res.data[k].bookid, res.data[k].bookname, res.data[k].publisher, 
                res.data[k].category, res.data[k].lang, res.data[k].author, res.data[k].description, 
                res.data[k].price, res.data[k].published, res.data[k].newarrival));
        }
        FilterPriceHighest(BookArray);
        //collect all categories
        var i;
        for (i= 0; i < BookArray.length; i++){
            category.push(BookArray[i].category);
        }
        
        //remove duplicates
        category = category.filter((x, i, a) => a.indexOf(x) === i)
        
        var j;
        for (j= 0; j < category.length; j++){
            document.getElementById('myCategory'+String(j)).innerHTML = category[j];
        }
    })
    .catch((err) => {
        alert("Error fetching data! Please try again");
    });
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

function ShowBookInfo(){
    var BookArray = [];
    const headers = {
        "Content-Type": "application/json",
      };

    axios
    .get(`http://localhost:8000/api/category`, { headers })
    .then((res) => {
        //collect all categories
        var k;
        for (k= 0; k < res.data.length; k++){
            BookArray.push(new BookBlueprint(res.data[k].bookid, res.data[k].bookname, res.data[k].publisher, 
                res.data[k].category, res.data[k].lang, res.data[k].author, res.data[k].description, 
                res.data[k].price, res.data[k].published, res.data[k].newarrival));
        }

        //before any filter loops, all records must be cleared out
        for (let x= 0; x < BookArray.length; x++){
            document.getElementById('bookname'+String(x)).innerHTML = "";
            document.getElementById('publisher'+String(x)).innerHTML = "";
            document.getElementById('author'+String(x)).innerHTML = "";
            document.getElementById('price'+String(x)).innerHTML = "";
            document.getElementById('newarrival'+String(x)).innerHTML = "";
            document.getElementById('bookid'+String(x)).innerHTML = "";
            document.getElementById('bookimage'+String(x)).style.display = "none";


        }

        FilterPriceHighest(BookArray);
        BookArray = FilterLookup(searchText, BookArray)
        BookArray = FilterCategory(innerHTMLtext, BookArray);
        console.log("OUTSIDE", BookArray)

        
        for (let x= 0; x < BookArray.length; x++){
            document.getElementById('bookname'+String(x)).innerHTML = BookArray[x].bookname;
            document.getElementById('publisher'+String(x)).innerHTML = "Publisher: "+ BookArray[x].publisher;
            document.getElementById('author'+String(x)).innerHTML = "Author: "+ BookArray[x].author;
            document.getElementById('price'+String(x)).innerHTML = "Price: "+ BookArray[x].price;
            document.getElementById('bookid'+String(x)).innerHTML = BookArray[x].bookid;
            document.getElementById('newarrival'+String(x)).innerHTML = NewArrival(BookArray[x].newarrival);
            document.getElementById('bookimage'+String(x)).style.display = "block"
            document.getElementById('bookid'+String(x)).style.display = "none"




            console.log(BookArray[x].bookid)

            if (BookArray[x].bookid === "001"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_001.b936bb7c.jpeg"

            }
            else if (BookArray[x].bookid === "002"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_002.175124c9.jpeg"

            }
            else if (BookArray[x].bookid === "003"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_003.843035e2.jpeg "
            }
            else if (BookArray[x].bookid === "004"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_004.2ac4333a.jpeg "

            }
            else if (BookArray[x].bookid === "005"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_005.6cdb4499.jpeg "

            }
            else if (BookArray[x].bookid === "006"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_006.5a7818c3.jpeg "

            }
            else if (BookArray[x].bookid === "007"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_007.ec098aa1.jpeg"

            }
            else if (BookArray[x].bookid === "008"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_008.c81c6b6a.jpeg"

            }
            else if (BookArray[x].bookid === "009"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_009.2fdd3424.jpeg "

            }
            else if (BookArray[x].bookid === "010"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_010.f39b451e.jpeg"

            }
            else if (BookArray[x].bookid === "011"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_011.63c64e43.jpeg "

            }
            else if (BookArray[x].bookid === "012"){
                document.getElementById('bookimage'+String(x)).src = "/static/media/book_012.df25b41d.jpeg"

            }
        }

        var onboard_check = localStorage.getItem("onboardUser");
        if (onboard_check != "guest"){
            document.getElementById("signinButton").style.display = "none";
            document.getElementById("loginButton").innerHTML = "Logout"
            document.getElementById("logmode").href = "/";
            document.getElementById("logmode").onclick = function(){
                localStorage.setItem("onboardUser", "guest")
            }
        }

    })
    .catch((err) => {
        alert("Error fetching data! Please try again");
        console.log(err);
    });
}

var togglePriceSort = 0;
var innerHTMLtext = null;

//Upon click, trigger creation of book info and category except with togglePrice = on
function PriceHighest(event){
        //event.preventDefault();
        if (togglePriceSort === 0){
            togglePriceSort = 1;
        }
        else{
            togglePriceSort = 0;
        }
        ShowBookInfo();
        ShowCategory();
    }

//Placed in ShowBookInfo is filtration function for highest price
function FilterPriceHighest(BookArray){
    if (togglePriceSort){
        //sort BookArray by price
        var min;
        var y;
        for (y = 0; y < BookArray.length; y++){
            min = y;
            var z;
            for (z = y+1; z < BookArray.length; z++){
                if (parseInt(BookArray[z].price) > parseInt(BookArray[min].price)){
                    min = z;
                }
            }
            if (min !== y){
                [BookArray[y], BookArray[min]] = [BookArray[min], BookArray[y]];
            }
        }

        //change button HTML
        document.getElementById("sortButton").innerHTML = "All Books (Sort by Price Highest)";
    }
    else{
        //default button HTML
        document.getElementById("sortButton").innerHTML = "Sort by Price (Highest)";
    }
}

function NewArrival(confirm){
            if (confirm === "Yes"){
                return "NEW ARRIVAL!"
            }
            else{
                return "";
            }
        }


function Category0Select(){
    innerHTMLtext = document.getElementById("myCategory0").innerHTML;
    document.getElementById("arrow").innerHTML = ">";
    document.getElementById("linkDetails").innerHTML = innerHTMLtext;
    document.getElementById("allTitle").innerHTML = "All " + innerHTMLtext;
    ShowBookInfo();
    ShowCategory();
}

function Category1Select(){
    innerHTMLtext = document.getElementById("myCategory1").innerHTML;
    document.getElementById("arrow").innerHTML = ">";
    document.getElementById("linkDetails").innerHTML = innerHTMLtext;
    document.getElementById("allTitle").innerHTML = "All " + innerHTMLtext;
    ShowBookInfo();
    ShowCategory();
}

function Category2Select(){
    innerHTMLtext = document.getElementById("myCategory2").innerHTML;
    document.getElementById("arrow").innerHTML = ">";
    document.getElementById("linkDetails").innerHTML = innerHTMLtext;
    document.getElementById("allTitle").innerHTML = "All " + innerHTMLtext;
    ShowBookInfo();
    ShowCategory();
}

function Category3Select(){
    innerHTMLtext = document.getElementById("myCategory3").innerHTML;
    document.getElementById("arrow").innerHTML = ">";
    document.getElementById("linkDetails").innerHTML = innerHTMLtext;
    document.getElementById("allTitle").innerHTML = "All " + innerHTMLtext;
    ShowBookInfo();
    ShowCategory();
    
}

function FilterCategory(innerHTMLtext, BookArray){
    var categoryselect = innerHTMLtext;
    var a;
    if (innerHTMLtext !== null){
        var BookArrayCategory = [];
        for (a = 0; a < BookArray.length; a++){
            if (BookArray[a].category === categoryselect){
                BookArrayCategory.push(BookArray[a]);  
            }
        }
        BookArray = BookArrayCategory;
        console.log("INSIDE", BookArray)
        innerHTMLtext = null
    }
    return BookArray;
}

var searchText = null;

function searchKeyword(){
    searchText = document.getElementById("searchBox").value;
    searchText = searchText.split(" ");
    document.getElementById("allTitle").innerHTML = "Searching Results"
    ShowBookInfo();
    ShowCategory();
}

function FilterLookup(searchText, BookArray){
    if (searchText !== null){
        var BookArraySearch = [];
        for (let s = 0; s < BookArray.length; s++){
            for (let t = 0; t < searchText.length; t++){
                if (BookArray[s].bookname.includes(searchText[t])||BookArray[s].author.includes(searchText[t])){
                    BookArraySearch.push(BookArray[s]);
                }
            }
        }
        //drop duplicate pull
        BookArraySearch = BookArraySearch.filter((x, i, a) => a.indexOf(x) === i)
        BookArray = BookArraySearch;
        console.log("Filtered keyword", BookArray)
        searchText = null;
    }
    return BookArray;
}

var selectedBook = null;

function PullDetails0(){
    selectedBook = document.getElementById("bookname0").innerHTML;
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails1(){
    selectedBook = document.getElementById("bookname1").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails2(){
    selectedBook = document.getElementById("bookname2").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails3(){
    selectedBook = document.getElementById("bookname3").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails4(){
    selectedBook = document.getElementById("bookname4").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails5(){
    selectedBook = document.getElementById("bookname5").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails6(){
    selectedBook = document.getElementById("bookname6").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails7(){
    selectedBook = document.getElementById("bookname7").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails8(){
    selectedBook = document.getElementById("bookname8").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails9(){
    selectedBook = document.getElementById("bookname9").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails10(){
    selectedBook = document.getElementById("bookname10").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}
function PullDetails11(){
    selectedBook = document.getElementById("bookname11").innerHTML
    localStorage.setItem("bookselection", selectedBook);
}