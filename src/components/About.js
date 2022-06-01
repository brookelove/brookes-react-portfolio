import React from 'react';
import '../styles/About.css'

export default function About () {
    return (
        <div class="outsideAbout">
        <div id="about" className="aboutContainer">
            <h1>About Me</h1> 
            <h3>I am ... <div id='rotatingPrompt'></div></h3>
            <div className='contentContainer'>
                <div className='personalImage'></div>
            <div className="personalBio">
            <p>I have a passion for understangnabout why things work the way they are. I have a knack for design and want to understand more about the technical world. Having interactive websites that promote user experience. WIth the useful look of simple yet effective. I strive to improv emy skills that can later connect to more than just the web.
            </p>
            <p>
            Although I have background in biology and a dash psychology, I have realized that those two are passions in my life but, not the passions that I want to pursue for the restog my work career. Instead I have taken those passions and will apply them to passion projects in my life that could provide connection to those worlds. I have am in pursuit of my Certificate of Fullstack Engineering from the University of Washington Bootcamp. I have plans to pursue my education after the completion of my certificate to further my knowledge.
            </p>

            <p>
            When I code I am excited when something that I thought would never make sense to me finally does make sense(If you remeber your first time looking at vanilla Javascript). What keeps me in pursiut of this journey is when coding and having that anticipation of testing out a code that you thought might not work. If you want to reach out to me please to hesitate to contact me. 
            </p>
            </div>
            </div>
        </div>
        </div>
    )
}