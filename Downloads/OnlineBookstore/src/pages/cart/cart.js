import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './cart.css';

export default function Cart(props) {

    ShowCartInfo();

    return(
        <div id = "CartPage">
            <div id = "myOrder">
                <Link to = "/register">
                    <button id = "signinButton">Register</button>
                </Link>
                <a id = "logmode" href = "/login">
                    <button id = "loginButton">Login</button>
                </a>
                <div id = "cartLink">
                    <Link to = "/cart">
                        <button id = "cartButton">Cart</button>
                    </Link>
                        <div id = "cartNumber"></div>
                </div>
                
                    <div id = "cartDetails">
                        <div id = "searchBar">
                            <input id = "searchBox" type = "text" placeholder = "Keywords(s)"></input>
                            <Link to = "/">
                                <button id = "searchButton">Search</button>
                            </Link>
                        </div>
                        <h1>My Shopping Cart</h1>
                        <div id = "bookname0"></div>
                        <div id = "quantity0"></div>
                        <button id = "deleteButton0" onClick = {Delete0}>Delete</button>
                        <div id = "bookname1"></div>
                        <div id = "quantity1"></div>
                        <button id = "deleteButton1" onClick = {Delete1}>Delete</button>
                        <div id = "bookname2"></div>
                        <div id = "quantity2"></div>
                        <button id = "deleteButton2" onClick = {Delete2}>Delete</button>
                        <div id = "bookname3"></div>
                        <div id = "quantity3"></div>
                        <button id = "deleteButton3" onClick = {Delete3}>Delete</button>
                        <div id = "bookname4"></div>
                        <div id = "quantity4"></div>
                        <button id = "deleteButton4" onClick = {Delete4}>Delete</button>
                        <div id = "bookname5"></div>
                        <div id = "quantity5"></div>
                        <button id = "deleteButton5" onClick = {Delete5}>Delete</button>
                        <div id = "bookname6"></div>
                        <div id = "quantity6"></div>
                        <button id = "deleteButton6" onClick = {Delete6}>Delete</button>
                        <div id = "bookname7"></div>
                        <div id = "quantity7"></div>
                        <button id = "deleteButton7" onClick = {Delete7}>Delete</button>
                        <div id = "bookname8"></div>
                        <div id = "quantity8"></div>
                        <button id = "deleteButton8" onClick = {Delete8}>Delete</button>
                        <div id = "bookname9"></div>
                        <div id = "quantity9"></div>
                        <button id = "deleteButton9" onClick = {Delete9}>Delete</button>
                        <div id = "bookname10"></div>
                        <div id = "quantity10"></div>
                        <button id = "deleteButton10" onClick = {Delete10}>Delete</button>
                        <div id = "bookname11"></div>
                        <div id = "quantity11"></div>
                        <button id = "deleteButton11" onClick = {Delete11}>Delete</button>
                        <div id = "totalPrice"></div>
                    </div>
                <Link to="/">
                    <button id="backButton">Back</button>
                </Link>
                <Link to="/checkout">
                    <button id="checkoutButton">Checkout</button>
                </Link>
            </div>
        </div>
    );
    
}

function ShowCartInfo(){
    

    var onboardUser = localStorage.getItem("onboardUser");

    console.log("cU", onboardUser);

    getQuant(onboardUser).then(quantData => {
        getBookName(quantData, onboardUser).then(quantData => {
            console.log("Layer 1", quantData)
        })
        .catch((err) => {console.log("Error getting bookname")});
    })
    .catch((err) => {console.log("Function interrupted")});

}

function getQuant (onboardUser) {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios
    .get(`http://localhost:8000/api/cart`, { headers })
    .then((res) => {
        for (let k = 0; k < res.data.length; k++){
                if (res.data[k].userid === onboardUser){
                    return [
                    res.data[k]._001,
                    res.data[k]._002,
                    res.data[k]._003,
                    res.data[k]._004,
                    res.data[k]._005,
                    res.data[k]._006,
                    res.data[k]._007,
                    res.data[k]._008,
                    res.data[k]._009,
                    res.data[k]._010,
                    res.data[k]._011,
                    res.data[k]._012,
                    ]
                }
                else{
                    console.log("Can't get quantData")
                }
        }
    })
    .catch((err) =>{
        console.log("None", err)
    });
}

function getBookName (quantData, onboardUser) {

    const headers = {
        "Content-Type": "application/json",
    };
    
    axios
    .get(`http://localhost:8000/api/category`, { headers })
    .then((res) => {
        console.log("res", res.data[0].bookname)
        console.log("quantData", quantData)
        console.log("onboardUser", onboardUser)

        var CartDetails = [];
        CartDetails.push([res.data[0].bookname, quantData[0], Number(res.data[0].price)]);
        CartDetails.push([res.data[1].bookname, quantData[1], Number(res.data[1].price)]);
        CartDetails.push([res.data[2].bookname, quantData[2], Number(res.data[2].price)]);
        CartDetails.push([res.data[3].bookname, quantData[3], Number(res.data[3].price)]);
        CartDetails.push([res.data[4].bookname, quantData[4], Number(res.data[4].price)]);
        CartDetails.push([res.data[5].bookname, quantData[5], Number(res.data[5].price)]);
        CartDetails.push([res.data[6].bookname, quantData[6], Number(res.data[6].price)]);
        CartDetails.push([res.data[7].bookname, quantData[7], Number(res.data[7].price)]);
        CartDetails.push([res.data[8].bookname, quantData[8], Number(res.data[8].price)]);
        CartDetails.push([res.data[9].bookname, quantData[9], Number(res.data[9].price)]);
        CartDetails.push([res.data[10].bookname, quantData[10], Number(res.data[10].price)]);
        CartDetails.push([res.data[11].bookname, quantData[11], Number(res.data[11].price)]);


    console.log("Cart Details", CartDetails)

    localStorage.setItem("CartBox", JSON.stringify(CartDetails));

    LoadCartItems(CartDetails);

    CartDetails = JSON.parse(localStorage.getItem("CartBox"));

    }).catch((err) =>{
        alert("Error fetching data! Please try again");
        console.log(err);
    });

}

function LoadCartItems(CartDetails){
    var totalPrice = 0;
    var cartNumber = 0;

    if (CartDetails[0][1] !== 0){
        document.getElementById("bookname0").innerHTML = "Book Name: " + CartDetails[0][0]
        document.getElementById("quantity0").innerHTML = "Quantity: " + CartDetails[0][1]
        totalPrice += CartDetails[0][1]*CartDetails[0][2]
        cartNumber+= CartDetails[0][1];
    }
    else{
        document.getElementById("bookname0").innerHTML = "Book Name: " + CartDetails[0][0]
        document.getElementById("quantity0").innerHTML = "Quantity: " + CartDetails[0][1]
        document.getElementById("bookname0").style.display = "none"
        document.getElementById("quantity0").style.display = "none"
        document.getElementById("deleteButton0").style.display = "none";
    }
    if (CartDetails[1][1] !== 0){
        document.getElementById("bookname1").innerHTML = "Book Name: " + CartDetails[1][0]
        document.getElementById("quantity1").innerHTML = "Quantity: " + CartDetails[1][1]
        totalPrice += CartDetails[1][1]*CartDetails[1][2]
        cartNumber+= CartDetails[1][1];
    }
    else{
        document.getElementById("bookname1").innerHTML = "Book Name: " + CartDetails[1][0]
        document.getElementById("quantity1").innerHTML = "Quantity: " + CartDetails[1][1]
        document.getElementById("bookname1").style.display = "none"
        document.getElementById("quantity1").style.display = "none"
        document.getElementById("deleteButton1").style.display = "none";
    }
    if (CartDetails[2][1] !== 0){
        document.getElementById("bookname2").innerHTML = "Book Name: " + CartDetails[2][0]
        document.getElementById("quantity2").innerHTML = "Quantity: " + CartDetails[2][1]
        totalPrice += CartDetails[2][1]*CartDetails[2][2]
        cartNumber+= CartDetails[2][1];
    }
    else{
        document.getElementById("bookname2").innerHTML = "Book Name: " + CartDetails[2][0]
        document.getElementById("quantity2").innerHTML = "Quantity: " + CartDetails[2][1]
        document.getElementById("bookname2").style.display = "none"
        document.getElementById("quantity2").style.display = "none"
        document.getElementById("deleteButton2").style.display = "none";
    }
    if (CartDetails[3][1] !== 0){
        document.getElementById("bookname3").innerHTML = "Book Name: " + CartDetails[3][0]
        document.getElementById("quantity3").innerHTML = "Quantity: " + CartDetails[3][1]
        totalPrice += CartDetails[3][1]*CartDetails[3][2]
        cartNumber+= CartDetails[3][1];
    }
    else{
        document.getElementById("bookname3").innerHTML = "Book Name: " + CartDetails[3][0]
        document.getElementById("quantity3").innerHTML = "Quantity: " + CartDetails[3][1]
        document.getElementById("bookname3").style.display = "none"
        document.getElementById("quantity3").style.display = "none"
        document.getElementById("deleteButton3").style.display = "none";
    }
    if (CartDetails[4][1] !== 0){
        document.getElementById("bookname4").innerHTML = "Book Name: " + CartDetails[4][0]
        document.getElementById("quantity4").innerHTML = "Quantity: " + CartDetails[4][1]
        totalPrice += CartDetails[4][1]*CartDetails[4][2]
        cartNumber+= CartDetails[4][1];
    }
    else{
        document.getElementById("bookname4").innerHTML = "Book Name: " + CartDetails[4][0]
        document.getElementById("quantity4").innerHTML = "Quantity: " + CartDetails[4][1]
        document.getElementById("bookname4").style.display = "none"
        document.getElementById("quantity4").style.display = "none"
        document.getElementById("deleteButton4").style.display = "none";
    }
    if (CartDetails[5][1] !== 0){
        document.getElementById("bookname5").innerHTML = "Book Name: " + CartDetails[5][0]
        document.getElementById("quantity5").innerHTML = "Quantity: " + CartDetails[5][1]
        totalPrice += CartDetails[5][1]*CartDetails[5][2]
        cartNumber+= CartDetails[5][1];
    }
    else{
        document.getElementById("bookname5").innerHTML = "Book Name: " + CartDetails[5][0]
        document.getElementById("quantity5").innerHTML = "Quantity: " + CartDetails[5][1]
        document.getElementById("bookname5").style.display = "none"
        document.getElementById("quantity5").style.display = "none"
        document.getElementById("deleteButton5").style.display = "none";
    }
    if (CartDetails[6][1] !== 0){
        document.getElementById("bookname6").innerHTML = "Book Name: " + CartDetails[6][0]
        document.getElementById("quantity6").innerHTML = "Quantity: " + CartDetails[6][1]
        totalPrice += CartDetails[6][1]*CartDetails[6][2]
        cartNumber+= CartDetails[6][1];
    }
    else{
        document.getElementById("bookname6").innerHTML = "Book Name: " + CartDetails[6][0]
        document.getElementById("quantity6").innerHTML = "Quantity: " + CartDetails[6][1]
        document.getElementById("bookname6").style.display = "none"
        document.getElementById("quantity6").style.display = "none"
        document.getElementById("deleteButton6").style.display = "none";
    }
    if (CartDetails[7][1] !== 0){
        document.getElementById("bookname7").innerHTML = "Book Name: " + CartDetails[7][0]
        document.getElementById("quantity7").innerHTML = "Quantity: " + CartDetails[7][1]
        totalPrice += CartDetails[7][1]*CartDetails[7][2]
        cartNumber+= CartDetails[7][1];
    }
    else{
        document.getElementById("bookname7").innerHTML = "Book Name: " + CartDetails[7][0]
        document.getElementById("quantity7").innerHTML = "Quantity: " + CartDetails[7][1]
        document.getElementById("bookname7").style.display = "none"
        document.getElementById("quantity7").style.display = "none"
        document.getElementById("deleteButton7").style.display = "none";
    }
    if (CartDetails[8][1] !== 0){
        document.getElementById("bookname8").innerHTML = "Book Name: " + CartDetails[8][0]
        document.getElementById("quantity8").innerHTML = "Quantity: " + CartDetails[8][1]
        totalPrice += CartDetails[8][1]*CartDetails[8][2]
        cartNumber+= CartDetails[8][1];
    }
    else{
        document.getElementById("bookname8").innerHTML = "Book Name: " + CartDetails[8][0]
        document.getElementById("quantity8").innerHTML = "Quantity: " + CartDetails[8][1]
        document.getElementById("bookname8").style.display = "none"
        document.getElementById("quantity8").style.display = "none"
        document.getElementById("deleteButton8").style.display = "none";
    }
    if (CartDetails[9][1] !== 0){
        document.getElementById("bookname9").innerHTML = "Book Name: " + CartDetails[9][0]
        document.getElementById("quantity9").innerHTML = "Quantity: " + CartDetails[9][1]
        totalPrice += CartDetails[9][1]*CartDetails[9][2]
        cartNumber+= CartDetails[9][1];
    }
    else{
        document.getElementById("bookname9").innerHTML = "Book Name: " + CartDetails[9][0]
        document.getElementById("quantity9").innerHTML = "Quantity: " + CartDetails[9][1]
        document.getElementById("bookname9").style.display = "none"
        document.getElementById("quantity9").style.display = "none"
        document.getElementById("deleteButton9").style.display = "none";
    }
    if (CartDetails[10][1] !== 0){
        document.getElementById("bookname10").innerHTML = "Book Name: " + CartDetails[10][0]
        document.getElementById("quantity10").innerHTML = "Quantity: " + CartDetails[10][1]
        totalPrice += CartDetails[10][1]*CartDetails[10][2]
        cartNumber+= CartDetails[10][1];
    }
    else{
        document.getElementById("bookname10").innerHTML = "Book Name: " + CartDetails[10][0]
        document.getElementById("quantity10").innerHTML = "Quantity: " + CartDetails[10][1]
        document.getElementById("bookname10").style.display = "none"
        document.getElementById("quantity10").style.display = "none"
        document.getElementById("deleteButton10").style.display = "none";
    }
    if (CartDetails[11][1] !== 0){
        document.getElementById("bookname11").innerHTML = "Book Name: " + CartDetails[11][0]
        document.getElementById("quantity11").innerHTML = "Quantity: " + CartDetails[11][1]
        totalPrice += CartDetails[11][1]*CartDetails[11][2]
        cartNumber+= CartDetails[11][1];
    }
    else{
        document.getElementById("bookname11").innerHTML = "Book Name: " + CartDetails[10][0]
        document.getElementById("quantity11").innerHTML = "Quantity: " + CartDetails[10][1]
        document.getElementById("bookname11").style.display = "none"
        document.getElementById("quantity11").style.display = "none"
        document.getElementById("deleteButton11").style.display = "none";
    }

    if (totalPrice !== 0){
        document.getElementById("totalPrice").innerHTML = "Total Price: $HK " + totalPrice
    }

    else{
        document.getElementById("totalPrice").style.display = "none";
    }

    localStorage.setItem("cartNumber", cartNumber);
    if (totalPrice !== 0){
        document.getElementById("cartNumber").innerHTML = cartNumber;
    }

    else{
        document.getElementById("cartNumber").style.display = "none";
    }

    var onboard_check = localStorage.getItem("onboardUser");
        if (onboard_check != "guest"){
            document.getElementById("signinButton").style.display = "none";
            document.getElementById("loginButton").innerHTML = "Logout";
            document.getElementById("logmode").href = "/";
            document.getElementById("logmode").onclick = function(){
                localStorage.setItem("onboardUser", "guest")
            }
        }
}

function Delete0(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[0][1] =newCartDetails[0][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[0][1],
        bookidBlock: "_001",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

function Delete1(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[1][1] =newCartDetails[1][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[1][1],
        bookidBlock: "_002",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

function Delete2(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[2][1] = newCartDetails[2][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[2][1],
        bookidBlock: "_003",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

function Delete3(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[3][1] =newCartDetails[3][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[3][1],
        bookidBlock: "_004",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

function Delete4(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[4][1] =newCartDetails[4][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[4][1],
        bookidBlock: "_005",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

function Delete5(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[5][1] =newCartDetails[5][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[5][1],
        bookidBlock: "_006",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}


function Delete6(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[6][1] =newCartDetails[6][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[6][1],
        bookidBlock: "_007",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}


function Delete7(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[7][1] =newCartDetails[7][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[7][1],
        bookidBlock: "_008",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}


function Delete8(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[8][1] =newCartDetails[8][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[8][1],
        bookidBlock: "_009",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}


function Delete9(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[9][1] =newCartDetails[9][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[9][1],
        bookidBlock: "_010",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}


function Delete10(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[10][1] =newCartDetails[10][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[10][1],
        bookidBlock: "_011",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

function Delete11(){
    var newCartDetails = JSON.parse(localStorage.getItem("CartBox"));
    newCartDetails[11][1] =newCartDetails[11][1]-1;
    localStorage.setItem("CartBox", JSON.stringify(newCartDetails));
    console.log(newCartDetails)

    const quantBlock = JSON.stringify({
        //ALREADY DEDUCTED A NEWCARTDETAIL
        quantBlock: newCartDetails[11][1],
        bookidBlock: "_012",
        useridBlock: localStorage.getItem("onboardUser")
    })

    const headers = {
        "Content-Type": "application/json",
      };

      axios
      .post("http://localhost:8000/api/cart/delete", quantBlock, { headers })
      .then((res) => {
          if (res.status === 200) {
              console.log("Quantity Update Posted!")
          } else {
          console.log(res.error);
          const error = new Error(res.error);
          throw error;
          }
      })
      .catch((err) => {
          alert(err.response.data);
      });

    LoadCartItems(newCartDetails);
}

