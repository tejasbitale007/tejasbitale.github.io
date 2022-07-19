import React from "react";
import Typical from 'react-typical';
import "./Header.css"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(){
    return(
        <div className="Header-container">
            <div className="Header-home">
                <a href="#">Home</a>
            </div>
            <div className="Header-About">
                <a href="#">AboutMe</a>
            </div>
            <div className="Header-Resume">
                <a href="#">Resume</a>
            </div>
            <div className="Header-Contact-us">
                <a href="#">Contact Me</a>
            </div>
            <div className="hamburger-menu">
                <a href="#">
                    <GiHamburgerMenu/>
                </a>
            </div>
        </div>
    )
}