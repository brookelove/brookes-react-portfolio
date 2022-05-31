import React from "react";
import { FaLinkedin, FaGithubSquare, FaCodepen } from "react-icons/fa";
import "../styles/Footer.css"
export default function Footer () {
    return (
        <div className="footerContainer">
            <h1>Thanks For Coming</h1>
        <div className="endPage" >
                <div className="wordContainer">
                    <h5>Want To Check More out</h5>
                    <h5>Click the icons below</h5>
                </div>
                <div className="iconContainer">
                    <a><FaGithubSquare size="4em"/></a>
                    <a><FaLinkedin size="4em"/></a>
                    <a><FaCodepen size="4em"/></a>
                </div> 
            </div>
            <h6>Made By Brooke</h6>
        </div>
    )
}