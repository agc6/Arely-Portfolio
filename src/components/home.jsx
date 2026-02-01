import React from "react";
import "./home.css";
import { RiSketching } from "react-icons/ri";

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const openLinkedIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open("https://www.linkedin.com/in/arely-gutierrez-carbajal", "_blank", "noopener,noreferrer");
};

const Home = () => {
    return(
        <section className="home container" id="home">
        <div className="intro">
            <span className="hello">Hello! My name is </span>
            <h2 className="home-name"><RiSketching />ARELY<RiSketching style = {{transform: 'rotate(90deg)' }} /></h2>
            <span className="about">I’m a computer science grad from Texas State University, and current
                 Software Developement Intern at The Walt Disney Company, who likes building things that make life a little easier.
                </span>
            <div className="home-buttons">
                <a
                    href="/assets/arely-gutierrez-carbajal-resume.pdf"
                    download="Arely_Gutierrez_Carbajal_Resume.pdf"
                    className="home-btn resume-btn"
                >
                    <DownloadIcon /> Download Resume
                </a>
                <a
                    href="#"
                    onClick={openLinkedIn}
                    className="home-btn linkedin-btn"
                >
                    <LinkedInIcon /> LinkedIn
                </a>
            </div>
        </div>
        </section>
    )
}

export default Home