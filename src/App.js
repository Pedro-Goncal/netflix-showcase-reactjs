import React from "react";
import Home from "./Components/Home/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*
npm i react-youtube

npm i movie-trailer
*/
