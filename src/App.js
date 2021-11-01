import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact>
          <Home />
        </Route>
        <Route>
          <Dashboard />
        </Route>
        <Route>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
