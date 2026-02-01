import React from "react";
import "./experience.css";
import "./home.css";

const Experience = () => {
    return (
        <section className="experience-section container" id="experience">
            <h2 className="section-title">Experience</h2>

            <div className="timeline">

                <div className="timeline-entry timeline-entry--main">
                    <div className="timeline-dot timeline-dot--main"></div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <div>
                                <h3 className="timeline-company">The Walt Disney Company</h3>
                                <p className="timeline-role">Software Developer Intern</p>
                            </div>
                            <span className="timeline-date">June 2025 – Present</span>
                        </div>
                        <ul className="timeline-bullets">
                            <li>Developed and maintained full-stack features for enterprise workforce management applications serving 10k–30k employees using AngularJS, TypeScript, Express.js, and SQL Server.</li>
                            <li>Improved data integrity by implementing robust frontend and backend validation for scheduling and time-off workflows.</li>
                            <li>Debugged and resolved production issues across frontend and backend services, improving reliability of high-volume scheduling workflows.</li>
                            <li>Collaborated directly with clients to translate functional requirements into scalable, production-ready features.</li>
                            <li>Delivered UI/UX improvements with AngularJS and Bootstrap to streamline time-off planning and increase usability.</li>
                        </ul>
                        <div className="timeline-tags">
                            <span>AngularJS</span>
                            <span>TypeScript</span>
                            <span>Express.js</span>
                            <span>SQL Server</span>
                            <span>Bootstrap</span>
                        </div>

                        <div className="hackathons">
                            <div className="hackathon-item">
                                <svg className="hackathon-arrow" viewBox="0 0 16 18" width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2 L2 10 Q2 14 6 14 L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                                    <path d="M10 10 L14 14 L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                                <div className="hackathon-content">
                                    <div className="hackathon-header">
                                        <h4 className="hackathon-title">AWS GameDay @ Disney</h4>
                                        <span className="hackathon-date">Oct 2025</span>
                                    </div>
                                    <p className="hackathon-desc">
                                        Competed in an Amazon GameDay hackathon, developing and troubleshooting an AWS-hosted application
                                        in a live, failure-driven simulation. Gained hands-on experience with EC2, S3, and RDS to deploy,
                                        monitor, and troubleshoot distributed applications.
                                    </p>
                                    <div className="timeline-tags">
                                        <span>AWS EC2</span>
                                        <span>S3</span>
                                        <span>RDS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hackathon-item">
                                <svg className="hackathon-arrow" viewBox="0 0 16 18" width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2 L2 10 Q2 14 6 14 L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                                    <path d="M10 10 L14 14 L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                                <div className="hackathon-content">
                                    <div className="hackathon-header">
                                        <h4 className="hackathon-title">Can You Hack It? – Disney Hackathon</h4>
                                        <span className="hackathon-date">Oct 2025</span>
                                    </div>
                                    <p className="hackathon-desc">
                                        Collaborated on a multi-day security challenge focused on malware analysis, open-source intelligence (OSINT),
                                        and basic cryptography. Investigated malware indicators using public threat intelligence tools such as
                                        hash lookups and historical analysis.
                                    </p>
                                    <div className="timeline-tags">
                                        <span>OSINT</span>
                                        <span>Malware Analysis</span>
                                        <span>Cryptography</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;