import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Details from "./pages/details/details.js";
import Cart from "./pages/cart/cart.js";
import Check from "./pages/check/check.js";
import Invoice from "./pages/invoice/invoice";
import './App.css';

function App() {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const authenticate = (data) => {
    setLogin(data);
  };

  return (
    <Router>
      <Route 
        path="/login"
        exact={true}
        render={(props) => (
          <Login
          login={login}
          authenticate={authenticate}
          />
        )}
      />
      <Route
        path="/register"
        exact={true}
        render={(props) => (
          <Register
            login={login}
            authenticate={authenticate}
          />
        )}
      />
      <Route
        path="/"
        exact={true}
        render={(props) => (
          <Home/>
        )}
      />
      <Route
        path="/details"
        exact={true}
        render={(props) => (
          <Details/>
        )}
      />
      <Route
        path="/cart"
        exact={true}
        render={(props) => (
          <Cart/>
        )}
      />
      <Route
        path="/checkout"
        exact={true}
        render={(props) => (
          <Check/>
        )}
      />
      <Route
        path="/invoice"
        exact={true}
        render={(props) => (
          <Invoice/>
        )}
      />
    </Router>
  );
}


export default App;
