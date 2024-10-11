import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary router components
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home /> 
                            <Projects />
                            <Contact />
                        </>
                    } />
                    
                </Routes>
            </main>
        </Router>
    );
};

export default App;
