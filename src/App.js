import './App.css'
import { useState } from "react";
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Favorites from './components/Favorites'
const axios = require('axios')

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <div id="links">
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/favorites' component={Favorites} />
      </div>
    </Router>
  );
}

export default App;
