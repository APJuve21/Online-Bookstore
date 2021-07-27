import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import axios from "axios";
import './register.css';

export default function Register(props) {
    const [userid, setUserid] = useState("");
    const [pw, setPw] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();
    const [cartNumber, SetCartNumber] = useState(localStorage.getItem("cartNumber"));

    async function onSubmit(event) {
        event.preventDefault();
        const body = JSON.stringify({
          userid: userid,
          pw: pw,
        });
        
        const headers = {
          "Content-Type": "application/json",
        };
        axios
          .post("http://localhost:8000/api/register", body, { headers })
          .then((res) => {
            if (res.status === 200) {
              history.push("/login");
            } else {
              alert(res.error);
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch((err) => {
            alert(err.response.data);
          });
      }
      return (
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

              <div id="loginBox">
                <div id="authHeader">Create Account</div>
                <form onSubmit={(event) => onSubmit(event)}>
                <div id = "username">
                  <label>Username</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Desired Username"
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
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Desired Password"
                    value={pw}
                    onChange={(event) => {
                      setPw(event.target.value);
                    }}
                  />
                  </div>
                  <div id = "backBox">
                  <input id="submitButton" type="submit" value="Confirm"/>
                  <Link to="/login">
                  <button id="back">Back</button>
                 </Link>
                 </div>
                </form>
              </div>
            </div> 

      );
    }