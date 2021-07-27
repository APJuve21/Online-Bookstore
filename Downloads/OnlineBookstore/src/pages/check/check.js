import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './check.css';

export default function Checkout(props) {

    const [userid, setUserid] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const [cartNumber, SetCartNumber] = useState(localStorage.getItem("cartNumber"))

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [postcode, setPostcode] = useState("");

    async function onSubmit(event) {
        event.preventDefault();
        const body = JSON.stringify({
          userid: userid,
          pw: pw
        });

        const headers = {
          "Content-Type": "application/json",
        };
        
        axios
        .post("http://localhost:8000/api/login", body, { headers })
        .then((res) => {
            if (res.status === 200) {
            localStorage.setItem("user",JSON.stringify(res.data))
            props.authenticate(JSON.parse(localStorage.getItem("user")))
            history.push("/checkout");
            } else {
            console.log(res.error);
            const error = new Error(res.error);
            throw error;
            }
        })
        .catch((err) => {
            setPw("");
            alert(err.response.data);
        });
    }



    ShowOrderInfo();


    return(
        <div id = "CheckoutPage">
            <div id = "overHead">
                <Link to = "/">
                    <input id = "searchBox" placeholder = "Keyword(s)"></input>
                    <button id = "searchButton">Search</button>
                </Link>
                <div id = "linkIcons">
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
                    <div id = "cartNumber">{cartNumber}</div>
                </div>
            </div>
            </div>
            <div id = "myCheckout">
            <div id = "myCustomer">
                <div id = "boxCustomer">
                    <div id = "newBox">
                        <div id = "newCustomer">I'm a new customer</div>
                        <div id = "below">Please Checkout Below</div>
                    </div>
                    <div id = "orBox">
                        <div id = "or">or</div>
                    </div>
                    <div id = "alreadyBox">
                        <div id = "alreadyCustomer">I'm already a customer</div>
                        <div id = "signinBox">
                            <Link to = "/login">
                                <div id = "signinTextBox">Sign In</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                <form id = "detailsCustomer">
                <div id="myLogin">
                <h2 id = "createTitle">Create Account: </h2>
                <div id = "UserBox">
                    <label>Username</label>
                    <input
                    id = "username"
                    name="userid"
                    placeholder="Enter username"
                    value={userid}
                    onChange={(event) => {
                    setUserid(event.target.value);
                    }}
                    required
                    />
                </div>
                <div id = "PasswordBox">
                    <label>Password</label>
                    <input
                    id = "password"
                    name="pw"
                    placeholder="Enter password"
                    value={pw}
                    onChange={(event) => {
                    setPw(event.target.value);
                    }}
                    required/>
                    <div id = "userwarning"></div>
                </div>
                </div>

                    <div>
                    <label>Full Name</label>  
                    <input id = "name" placeholder="Required" value = {name} 
                    onChange = {(event) => {setName(event.target.value);}} required></input>        
                    </div>
                    <div>
                    <label>Company Name</label>  
                    <input id = "company" value = {company}
                    onChange = {(event) => {setCompany(event.target.value);}}></input>    
                    </div>
                    <div>
                    <label >Address Line 1</label>  
                    <input id = "address1" placeholder="Required" value = {address1} 
                    onChange = {(event) => {setAddress1(event.target.value);}} required></input>
                    </div>
                    <div>
                    <label>Address Line 2</label>  
                    <input id = "address2"  value = {address2} 
                    onChange = {(event) => {setAddress2(event.target.value);}}></input>    
                    </div>
                    <div>
                    <label>City</label>  
                    <input id = "city" placeholder="Required" value = {city} 
                    onChange = {(event) => {setCity(event.target.value);}} required></input>    
                    </div>
                    <div>
                    <label>Region/State/District</label>  
                    <input id = "region" value = {region}
                    onChange = {(event) => {setRegion(event.target.value);}}></input>    
                    </div>
                    <div>
                    <label>Country</label>
                    <input id = "country" placeholder="Required" value = {country} 
                    onChange = {(event) => {setCountry(event.target.value);}} required></input>    
                    </div>
                    <div>
                    <label>Postcode/Zip Code</label>  
                    <input id = "postcode" placeholder="Required" value = {postcode} 
                    onChange = {(event) => {setPostcode(event.target.value);}} required></input>   
                    </div> 
                </form>
                <form id = "myOrder">
                    <div id = "changeOrder">
                        <div id = "changeBlock">
                        <div id = "changeText">Your Order</div>
                        <Link to="/cart">
                        <div id = "changeLink"> (change)</div>
                        </Link>
                        </div>
                        <div id = "ShippingText">Free Standard Shipping</div>
                        <div id = "listOrder0">
                            <div id = "listInfo0"></div>
                            <div id = "listPrice0"></div>
                        </div>
                        <div id = "listOrder1">
                            <div id = "listInfo1"></div>
                            <div id = "listPrice1"></div>
                        </div>
                        <div id = "listOrder2">
                            <div id = "listInfo2"></div>
                            <div id = "listPrice2"></div>
                        </div>
                        <div id = "listOrder3">
                            <div id = "listInfo3"></div>
                            <div id = "listPrice3"></div>
                        </div>
                        <div id = "listOrder4">
                            <div id = "listInfo4"></div>
                            <div id = "listPrice4"></div>
                        </div>
                        <div id = "listOrder5">
                            <div id = "listInfo5"></div>
                            <div id = "listPrice5"></div>
                        </div>
                        <div id = "listOrder6">
                            <div id = "listInfo6"></div>
                            <div id = "listPrice6"></div>
                        </div>
                        <div id = "listOrder7">
                            <div id = "listInfo7"></div>
                            <div id = "listPrice7"></div>
                        </div>
                        <div id = "listOrder8">
                            <div id = "listInfo8"></div>
                            <div id = "listPrice8"></div>
                        </div>
                        <div id = "listOrder9">
                            <div id = "listInfo9"></div>
                            <div id = "listPrice9"></div>
                        </div>
                        <div id = "listOrder10">
                            <div id = "listInfo10"></div>
                            <div id = "listPrice10"></div>
                        </div>
                        <div id = "listOrder11">
                            <div id = "listInfo11"></div>
                            <div id = "listPrice11"></div>
                        </div>
                        <div id = "totalPriceOrder"></div>
                        <Link to = "/invoice">
                            <button id="confirm" onClick = {storeOrder}>Confirm</button>
                        </Link>
                    </div>
                </form>
            </div>
    );
}

function storeOrder(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value
    var address1 = document.getElementById("address1").value
    var address2 = document.getElementById("address2").value
    var city = document.getElementById("city").value
    var region = document.getElementById("region").value
    var country = document.getElementById("country").value
    var postcode = document.getElementById("postcode").value


    const invoiceBlock = [
        name,
        company,
        address1,
        address2,
        city,
        region,
        country,
        postcode
    ];

    
    localStorage.setItem("invoiceBlock", JSON.stringify(invoiceBlock));

    if (name.length === 0||address1.length === 0|| city.length === 0|| country.length===0 || postcode.length === 0){
        alert("Please do not leave the fields empty")
    }
    else{
        window.location.replace("http://localhost:3000/invoice")
    }
    
}

function ShowOrderInfo(){
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
    .get(`http://localhost:8000/api/cart/`, { headers })
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

        if (onboardUser === "guest"){
            document.getElementById("myLogin").style.display = "none"
        }
        else{
            document.getElementById("myCustomer").style.display = "none"
        }

        var CartDetails = [];
        CartDetails.push([res.data[0].bookname, quantData[0], Number(res.data[0].price)]);
        CartDetails.push([res.data[1].bookname, quantData[1], Number(res.data[0].price)]);
        CartDetails.push([res.data[2].bookname, quantData[2], Number(res.data[0].price)]);
        CartDetails.push([res.data[3].bookname, quantData[3], Number(res.data[0].price)]);
        CartDetails.push([res.data[4].bookname, quantData[4], Number(res.data[0].price)]);
        CartDetails.push([res.data[5].bookname, quantData[5], Number(res.data[0].price)]);
        CartDetails.push([res.data[6].bookname, quantData[6], Number(res.data[0].price)]);
        CartDetails.push([res.data[7].bookname, quantData[7], Number(res.data[0].price)]);
        CartDetails.push([res.data[8].bookname, quantData[8], Number(res.data[0].price)]);
        CartDetails.push([res.data[9].bookname, quantData[9], Number(res.data[0].price)]);
        CartDetails.push([res.data[10].bookname, quantData[10], Number(res.data[0].price)]);
        CartDetails.push([res.data[11].bookname, quantData[11], Number(res.data[0].price)]);


    console.log("Cart Details", CartDetails)

    localStorage.setItem("CartBox", JSON.stringify(CartDetails));

    LoadOrderItems(CartDetails);

    CartDetails = JSON.parse(localStorage.getItem("CartBox"));

    }).catch((err) =>{
        alert("Error fetching data! Please try again");
        console.log(err);
    });

}

function LoadOrderItems(CartDetails){

    var totalPrice = 0;

    document.getElementById("listInfo0").innerHTML = String(CartDetails[0][1]) + " X " + CartDetails[0][0]
    document.getElementById("listPrice0").innerHTML = "HK$"+ String(CartDetails[0][1]*CartDetails[0][2])

    if (CartDetails[0][1] !== 0){
        totalPrice += CartDetails[0][1]*CartDetails[0][2]
    }

    else{
        document.getElementById("listInfo0").style.display = "none"
        document.getElementById("listPrice0").style.display = "none"
    }

    document.getElementById("listInfo1").innerHTML = String(CartDetails[1][1]) + " X " + CartDetails[1][0]
    document.getElementById("listPrice1").innerHTML = "HK$"+ String(CartDetails[1][1]*CartDetails[1][2])

    if (CartDetails[1][1] !== 0){
        totalPrice += CartDetails[1][1]*CartDetails[1][2]
    }

    else{
        document.getElementById("listInfo1").style.display = "none"
        document.getElementById("listPrice1").style.display = "none"
    }

    document.getElementById("listInfo2").innerHTML = String(CartDetails[2][1]) + " X " + CartDetails[2][0]
    document.getElementById("listPrice2").innerHTML = "HK$"+ String(CartDetails[2][1]*CartDetails[2][2])

    if (CartDetails[2][1] !== 0){
        totalPrice += CartDetails[2][1]*CartDetails[2][2]
    }

    else{
        document.getElementById("listInfo2").style.display = "none"
        document.getElementById("listPrice2").style.display = "none"
    }

    document.getElementById("listInfo3").innerHTML = String(CartDetails[3][1]) + " X " + CartDetails[3][0]
    document.getElementById("listPrice3").innerHTML = "HK$"+ String(CartDetails[3][1]*CartDetails[3][2])

    if (CartDetails[3][1] !== 0){
        totalPrice += CartDetails[3][1]*CartDetails[3][2]
    }

    else{
        document.getElementById("listInfo3").style.display = "none"
        document.getElementById("listPrice3").style.display = "none"
    }

    document.getElementById("listInfo4").innerHTML = String(CartDetails[4][1]) + " X " + CartDetails[4][0]
    document.getElementById("listPrice4").innerHTML = "HK$"+ String(CartDetails[4][1]*CartDetails[4][2])

    if (CartDetails[4][1] !== 0){
        totalPrice += CartDetails[4][1]*CartDetails[4][2]
    }

    else{
        document.getElementById("listInfo4").style.display = "none"
        document.getElementById("listPrice4").style.display = "none"
    }

    document.getElementById("listInfo5").innerHTML = String(CartDetails[5][1]) + " X " + CartDetails[5][0]
    document.getElementById("listPrice5").innerHTML = "HK$"+ String(CartDetails[5][1]*CartDetails[5][2])

    if (CartDetails[5][1] !== 0){
        totalPrice += CartDetails[5][1]*CartDetails[5][2]
    }

    else{
        document.getElementById("listInfo5").style.display = "none"
        document.getElementById("listPrice5").style.display = "none"
    }

    document.getElementById("listInfo6").innerHTML = String(CartDetails[6][1]) + " X " + CartDetails[6][0]
    document.getElementById("listPrice6").innerHTML = "HK$"+ String(CartDetails[6][1]*CartDetails[6][2])

    if (CartDetails[6][1] !== 0){
        totalPrice += CartDetails[6][1]*CartDetails[6][2]
    }

    else{
        document.getElementById("listInfo6").style.display = "none"
        document.getElementById("listPrice6").style.display = "none"
    }

    document.getElementById("listInfo7").innerHTML = String(CartDetails[7][1]) + " X " + CartDetails[7][0]
    document.getElementById("listPrice7").innerHTML = "HK$"+ String(CartDetails[7][1]*CartDetails[7][2])

    if (CartDetails[7][1] !== 0){
        totalPrice += CartDetails[7][1]*CartDetails[7][2]
    }

    else{
        document.getElementById("listInfo7").style.display = "none"
        document.getElementById("listPrice7").style.display = "none"
    }

    document.getElementById("listInfo8").innerHTML = String(CartDetails[8][1]) + " X " + CartDetails[8][0]
    document.getElementById("listPrice8").innerHTML = "HK$"+ String(CartDetails[8][1]*CartDetails[8][2])

    if (CartDetails[8][1] !== 0){
        totalPrice += CartDetails[8][1]*CartDetails[8][2]
    }

    else{
        document.getElementById("listInfo8").style.display = "none"
        document.getElementById("listPrice8").style.display = "none"
    }

    document.getElementById("listInfo9").innerHTML = String(CartDetails[9][1]) + " X " + CartDetails[9][0]
    document.getElementById("listPrice9").innerHTML = "HK$"+ String(CartDetails[9][1]*CartDetails[9][2])

    if (CartDetails[9][1] !== 0){
        totalPrice += CartDetails[9][1]*CartDetails[9][2]
    }

    else{
        document.getElementById("listInfo9").style.display = "none"
        document.getElementById("listPrice9").style.display = "none"
    }

    document.getElementById("listInfo10").innerHTML = String(CartDetails[10][1]) + " X " + CartDetails[10][0]
    document.getElementById("listPrice10").innerHTML = "HK$"+ String(CartDetails[10][1]*CartDetails[10][2])

    if (CartDetails[10][1] !== 0){
        totalPrice += CartDetails[10][1]*CartDetails[10][2]
    }

    else{
        document.getElementById("listInfo10").style.display = "none"
        document.getElementById("listPrice10").style.display = "none"
    }

    document.getElementById("listInfo11").innerHTML = String(CartDetails[11][1]) + " X " + CartDetails[11][0]
    document.getElementById("listPrice11").innerHTML = "HK$"+ String(CartDetails[11][1]*CartDetails[11][2])

    if (CartDetails[11][1] !== 0){
        totalPrice += CartDetails[11][1]*CartDetails[11][2]
    }

    else{
        document.getElementById("listInfo11").style.display = "none"
        document.getElementById("listPrice11").style.display = "none"
    }

    if (totalPrice !== 0){
        document.getElementById("totalPriceOrder").innerHTML = "Total Price: HK$" + totalPrice
    }
    else{
        document.getElementById("totalPriceOrder").style.display = "none";
        //hide button too
        document.getElementById("confirm").style.display = "none"
    }

    var onboard_check = localStorage.getItem("onboardUser");
        if (onboard_check != "guest"){
            document.getElementById("signinButton").style.display = "none";
            document.getElementById("loginButton").innerHTML = "Logout";
            document.getElementById("myLogin").style.display = "none";
            document.getElementById("logmode").href = "/";
            document.getElementById("logmode").onclick = function(){
                localStorage.setItem("onboardUser", "guest")
            }
            
        }
        else{
            document.getElementById("myLogin").style.display = "block";
        }


    var userinput = document.getElementById("username").value;

    console.log("hajkhkjh", userinput);

    if (userinput === "marco"){
        console.log("NOOOOO")
        document.getElementById("userwarning").innerHTML = "Username Duplicated!";
    }
    else{
        document.getElementById("userwarning").innerHTML = "   ";
    }
}

