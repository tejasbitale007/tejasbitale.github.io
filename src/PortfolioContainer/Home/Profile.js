import React from "react";
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile(){
    return(
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                        <a href="/#">
                            <i className="fa fa-instagram" ></i>
                        </a>
                        <a href="/#">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="/#">
                            <i className="fa fa-google-plus-square" ></i>
                        </a>
                        <a href="/#">
                            <i className="fa fa-linkedin-square" ></i>
                        </a>
                        <a href="https://github.com/tejasbitale007">
                            <i className="fa fa-github-square" ></i>
                        </a>
                        </div>
                        
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                        {" "}
                            Hello, I'M <span className="highlighted-text">Tejas</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev🔴",
                                        1000,
                                        "Java Devoloper 😎",
                                        1000,
                                        "MERN stack Dev 💻",
                                        1000,
                                        "React Dev🌐",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                            knack of building application with front and back end operations.
                            </span>
                        </span>
                        
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Hire me
                            {" "}
                        </button>
                        <a href="Resume.pdf" download={'Resume.pdf'}>
                        <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}