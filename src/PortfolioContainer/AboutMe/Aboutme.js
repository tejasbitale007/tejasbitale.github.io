import React from "react";
import Typical from 'react-typical';
import "./Aboutme.css";


export default function aboutme(){
    return(
        
        <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={require('../../assets/Home/tejas.jpg')}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          knack of building application with front and back end operations.
          </p>
          <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          
          
        </div>
      </div>
    
    )
}