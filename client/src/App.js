import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "../src/components/Container";
import Nav from "../src/components/Navbar";
import Saved from "../src/pages/Saved";
import Search from "../src/pages/Search";


import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Container>
                    <Route exact path="/saved" component={Saved} />
                    <Route exact path="/search" component={Search} />
                </Container>
            </div>
        </Router>
    );
}

export default App;
