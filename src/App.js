import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {

  return (
    <div className="App">
      <Home/>
      <Header/>
      <Dashboard />
    </div>
  );
}

export default App;
