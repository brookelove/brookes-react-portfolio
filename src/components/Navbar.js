import React, {Component, useState} from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-scroll';

export default class Navbar extends Component {

   

    render (){
        return ( 
        <header>
            <nav> 
                <ul className='menuItems'>
                    <div className='links'>
                        {/* <li ><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li> */}
                        <li><Link to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link to="tools&skills" spy={true} smooth={true}>Tools& Skills</Link></li>
                        <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link to="contactMe" spy={true} smooth={true}>Contact</Link></li>
                        <li><Link to="resume" spy={true} smooth={true}>Resume</Link></li>
                        <li><Link to="links" spy={true} smooth={true}>Links</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
        )
    }
}

