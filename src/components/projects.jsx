import React from "react";
import "./projects.css";
import "./home.css";
import { VscGithub } from "react-icons/vsc";
import { BiLogoFigma, BiLogoYoutube } from "react-icons/bi";

const Projects = () => {
    return(
        <section className="edu container" id="edu">
            <h2 className="section-title">Projects</h2>
            <div className="school-cards">

                <div className="school-data">
                <div className="school">
                    <h3>Plan.it</h3>
                    <div className="project-tags">
                        <span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Tailwind CSS</span>
                    </div>
                    Customizable digital planner designed specifically for students with ADHD.
                    <div className="github">
                        <a href="https://github.com/agc6" target="_blank" rel="noopener noreferrer"><VscGithub /></a>
                        <a href="https://youtu.be/5wvedW2masE?si=CobN9dIB_E1mxV3B" target="_blank" rel="noopener noreferrer"><BiLogoYoutube /></a>
                    </div>
                </div>
                </div>


                <div className="school-data">
                <div className="school">
                    <h3>Schedule Genius</h3>
                    <div className="project-tags">
                        <span>React</span><span>JavaScript</span><span>Firebase</span><span>CSS</span>
                    </div>
                    With Schedule Genius, users can stay organized and manage their academic tasks effectively.
                 <div className="github"><a href="https://github.com/agc6/Schedule-Genius"
                  target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
                     </div>
                 </div>

                 <div className="school-data">
                <div className="school">
                <h3>Grover Chrome Extension</h3>
                <div className="project-tags">
                    <span>JavaScript</span><span>HTML</span><span>CSS</span>
                </div>
                With the use of the Grover LLM, this Chrome extension allows users to check whether
                 internet news articles were written by humans or AI.
                 <div className="github"><a href="https://github.com/agc6/Grover-Browser-Extension"
                  target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
                  </div>
                 </div>

                 <div className="school-data">
                <div className="school">
                <h3>The Job Vault</h3>
                <div className="project-tags">
                    <span>React</span><span>JavaScript</span><span>Tailwind CSS</span>
                </div>
                A job application tracker that allows users to
                 organize, track, and manage job applications efficiently.
                 <div className="github"><a href="https://github.com/agc6/The-Job-Vault"
                  target="_blank" rel="noopener noreferrer"><VscGithub /></a> </div>
                  </div>
                 </div>

                 <div className="school-data">
                 <div className="school">
                <h3>Visionare</h3>
                <div className="project-tags">
                    <span>Figma</span>
                </div>
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