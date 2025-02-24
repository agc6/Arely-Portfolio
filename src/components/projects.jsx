import React from "react";
import "./projects.css";
import "./home.css";
import { VscGithub } from "react-icons/vsc";
import { BiLogoFigma } from "react-icons/bi";

const Projects = () => {
    return(
        <section className="edu container" id="edu">
            <h2 className="section-title">Projects</h2>
            <div className="school-cards">
            <div className="school-data">
            <div className="school">
                <h3>Schedule Genius</h3>
                <h4>Made with: ReactJS, JS, Firebase, and CSS.</h4> 
                With Schedule Genius, users can stay organized and manage their academic tasks effectively.
                <br></br>
             <div className="github"><a href="https://github.com/agc6/Schedule-Genius"
              target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
                 </div>
                 
                 </div>
                 <div className="school-data">
            <div className="school">
            <h3>Grover Chrome Extension</h3>
            <h4>Made with: JS, HTML, and CSS.</h4>
            With the use of the Grover LLM,  this Chrome extension allows users to check whether
             internet news articles were written by humans or AI. <br></br>
             <div className="github"><a href="https://github.com/agc6/Grover-Browser-Extension"
              target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
              </div>
                 </div>

                 <div className="school-data">
            <div className="school">
            <h3>The Job Vault</h3>
            <h4>Made with: ReactJS, Js, and Tailwind CSS.</h4>
            A job application tracker that allows users to
             organize, track, and manage job applications efficiently. <br></br>
             <div className="github"><a href="https://github.com/agc6/The-Job-Vault"
              target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
              </div>
                 </div>

                 <div className="school-data">
            <div className="school">
            <h3>Pomodoro Timer</h3>
            <h4>Made with: JS, HTML, and CSS.</h4>
            Pomodoro Timer with an integrated To-Do List
            designed to help users manage their time effectively while staying organized with their tasks. 
                 <div className="github"><a href="https://github.com/agc6/Pomodoro-To-Do"
              target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
              </div>         
                 </div>
                 <div className="school-data">
                 <div className="school">
            <h3>Visionare</h3>
            <h4>Made with: Figma.</h4>
            A creative mobile app concept designed to help users craft and share digital scrapbooks. 
            <div className="github"><a href="https://www.figma.com/proto/PqZCAQth3O2VEKz8HWR3cK/Visionare?node-id=0-1&t=wMdC0Bp9BgIh5rkk-1"
              target="_blank" rel="noopener noreferrer"><BiLogoFigma /></a> </div>
                 </div>
                 </div>
                 </div>
        </section>
    )
}

export default Projects