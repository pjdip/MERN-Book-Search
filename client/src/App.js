import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "../src/pages/Saved";


import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
          <div>
            <Saved />
          </div>
        </Router>
    );
}

export default App;
