import { useState, useEffect, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Mycards from "./pages/Mycards";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import { auth } from "./services/firebase";
import "./App.css";
import Header from "./components/Header";
import "./styles.css";


function App() {
  const [user, setUser] = useState(null);

  const [cards, setCards] = useState([]);

  const fetchData = useRef(null);

  const API_URL = "http://localhost:3001/api/card";

  const getCards = async () => {
    if (!user) return;
    const token = await user.getIdToken();
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorizzation: "Bearer" + token,
      },
    });
    const cards = await response.json();
    setCards(cards);
  };

  const createCard = async (card) => {
    if (!user) return;
    const token = await user.getIdToken();
    const data = { ...card, managedBy: user.uid };
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
    getCards();
  };

   const deleteCard = async (id) => {
     let token = await user.getIdToken();
     await fetch(API_URL + "/" + id, {
       method: "DELETE",
       headers: {
         Authorization: "Bearer " + token,
       },
     });
     getCards();
   };


  useEffect(() => {
    fetchData.current = getCards;
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchData.current();
      } else {
        setCards([]);
      }
    });

    // TODO: only get contacts after a user has signed in
    return () => unsubscribe(); // clean up action - remove observer from memory when not needed
  }, [user]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route
          path="/login"
          render={() => (user ? <Redirect to="/dashboard" /> : <Login />)}
        />
        <Route
          path="/dashboard"
          render={() =>
            user ? (
              <>
                <Header user={user} />
                <Dashboard user={user} />
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/mycards"
          render={() =>
            user ? (
              <Mycards user={user} cards={cards} createCard={createCard} deleteCard={deleteCard} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/resources">
          <Resources />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
