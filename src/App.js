import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Mycards from "./pages/Mycards";
import Resources from "./pages/Resources";
import Myprofile from "./pages/Myprofile";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
    return () => unsubscribe()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/mycards">
          <Mycards />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/myprofile">
          <Myprofile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
