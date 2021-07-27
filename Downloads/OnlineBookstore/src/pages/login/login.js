import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import './login.css';

export default function Login(props) {

    const [userid, setUserid] = useState("");
    const [pw, setPw] = useState("");
    const history = useHistory();
    const [cartNumber, SetCartNumber] = useState(localStorage.getItem("cartNumber"));

    async function onSubmit(event) {
        event.preventDefault();
        const body = JSON.stringify({
          userid: userid,
          pw: pw
        });

        console.log("HIHIH234234234", userid, pw)

        const headers = {
          "Content-Type": "application/json",
        };
        
        axios
        .post("http://localhost:8000/api/login", body, { headers })
        .then((res) => {
            if (res.status === 200) {
            localStorage.setItem("user",JSON.stringify(res.data))
            props.authenticate(JSON.parse(localStorage.getItem("user")))
            history.push("/");
            } else {
            alert(res.error);
            const error = new Error(res.error);
            throw error;
            }
        })
        .catch((err) => {
            setPw("");
            console.log(err.response.data);
        });
}
return(
    <div id="authContainer">
      <div id = "overHead">
          <Link to = "/">
                <input id = "searchBox" placeholder = "Keyword(s)"></input>
                <button id = "searchButton">Search</button>
            </Link>
            <div id = "linkIcons">
                <Link to = "/register">
                        <button id = "signinButton">Register</button>
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
            </div>
      <div id = "shopTitle">Ohmey's Bookstore</div>
        <div id="authBox">

          <div id="loginBox">
            <div id="authHeader">Login</div>
            <form onSubmit={(event) => onSubmit(event)}>
              <div id = "username">
                <label>Username</label>
                <input
                name="userid"
                placeholder="Enter username"
                value={userid}
                onChange={(event) => {
                  setUserid(event.target.value);
                  var onboardUser = event.target.value;
                  console.log("User set as ", onboardUser);
                  localStorage.setItem("onboardUser", onboardUser);
                }}
                />
              </div>
              <div id = "password">
                <label>Password</label>
                <input
                name="pw"
                placeholder="Enter password"
                value={pw}
                onChange={(event) => {
                  setPw(event.target.value);
                }}/>
              </div>
              <div id="registerBox">
              <div id = "createButton">
                <div id = "createText">Create an Account</div>
                <Link to="/register">
                  <button id="creator">Create</button>
                </Link>
              </div>
              <div id = "submitButton">
                <input id="submitButton" type="submit" value="Submit"/>
              </div>
              </div>
          </form>
        </div>


        </div>
      </div>
    );
}