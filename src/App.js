import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Mycards from "./pages/Mycards";
import Resources from "./pages/Resources"
import Myprofile from "./pages/Myprofile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/mycards">
          <Mycards />
        </Route>
        <Route path='/resources'>
          <Resources/>
        </Route>
        <Route path='/myprofile'>
          <Myprofile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
