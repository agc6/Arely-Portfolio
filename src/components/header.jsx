import React, { useState, useEffect } from "react";
import "./header.css";
import Hamburger from 'hamburger-react';

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    // Scroll to Contact section when "Contact" is clicked
    const scrollToContact = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    };

    // Close the hamburger menu if the screen is resized above 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpen(false); // Close the hamburger menu
            }
        };

        window.addEventListener("resize", handleResize);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="top_name">Arely.</div>
            <header className="header">
                <ul className="h-ul">
                    <li className="link">
                        <a href="https://www.linkedin.com/in/arely-gutierrez-carbajal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="link">
                        <a href="https://github.com/agc6" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="link">
                        <a href="#contact-section" onClick={scrollToContact}>Contact</a> {/* Smooth scroll to Contact */}
                    </li>
                </ul>
            </header>

            <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="s-ul">
                    <li className="link">
                        <a href="https://www.linkedin.com/in/arely-gutierrez-carbajal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="link">
                        <a href="https://github.com/agc6" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="#contact-section" onClick={scrollToContact}>Contact</a> {/* Scroll in the sidebar too */}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
