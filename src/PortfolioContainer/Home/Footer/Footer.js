import React from "react";
import './Footer.css';
import logo from '../../../assets/Home/shape-bg.png';

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-parent">
                <img src={logo} alt="no internet connection" />
            </div>
        </div>
    )
}