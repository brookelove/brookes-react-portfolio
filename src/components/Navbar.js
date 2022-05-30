import React from 'react';
import '../styles/Navbar.css';

export default function Navbar () {

    return ( 
    <div>
        <nav> 
            <ul className='menuItems'>
                <p>Brooke Love</p>
                <div className='links'>
                    <li ><a href="/">Home</a></li>
                    <li><a href="/aboutMe">About</a></li>
                    <li><a href="/tools&skills">Tools& Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contactMe">Contact</a></li>
                    <li><a href="/resume">Resume</a></li>
                </div>
            </ul>
        </nav>
    </div>
    )
}

