import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../src/components/Navbar";
import Saved from "../src/pages/Saved";
import Search from "../src/pages/Search";
import Footer from "../src/components/Footer";
import Container from "@material-ui/core/Container";

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Container maxWidth="xl">
                    <Route exact path="/saved" component={Saved} />
                    <Route exact path="/search" component={Search} />
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
