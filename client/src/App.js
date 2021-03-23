import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../src/components/Navbar";
import Saved from "../src/pages/Saved";
import Search from "../src/pages/Search";
import Footer from "../src/components/Footer";
import Container from "@material-ui/core/Container";
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Container maxWidth="xl">
                    <Route exact path="/saved" component={Saved} />
                    <Route exact path="/" component={Search} />
                </Container>
                <div className="sticky">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
