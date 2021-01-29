import React, { useState } from "react";

import { AppContext } from "./libs/contextLib";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./pages/homepage/homepage.jsx"
import MatchScreen from "./pages/matchScreen/matchScreen.jsx"

import Navbar from "./components/navBar/navBar.jsx"

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App">
      <header className="container">
        <Navbar/>
      </header>
      
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Homepage/>
        <MatchScreen/>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
