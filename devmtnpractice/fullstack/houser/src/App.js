import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import {HashRouter as Router} from "react-router-dom";
import routes from "./routes.js"


function App() {
  return (
    <div className="App">
    <Router >
    <Header />
    {routes}
    </Router>
    </div>
    
  );
}

export default App;
