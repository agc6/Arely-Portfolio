import React from "react";
import "./home.css";
import { RiSketching } from "react-icons/ri";

const Home = () => {
    return(
        <section className="home container" id="home">
        <div className="intro">
            <span className="hello">Hello! My name is </span>
            <h2 className="home-name"><RiSketching />ARELY<RiSketching style = {{transform: 'rotate(90deg)' }} /></h2>
            <span className="about">I am currently a senior student at Texas State University,
                 and have an interest in Front-End developing.
                 I major in Computer Science, as well as minor in Mathematics
                 and Mass Communications.</span>
        </div>
        </section>
    )
}

export default Home