import React from 'react';
import { DiGithubBadge, DiVisualstudio, DiHtml5, DiCss3, DiBootstrap, DiJqueryLogo, DiNodejsSmall,DiResponsive} from "react-icons/di";
import '../styles/Tools.css';


export default function Tools () {
    return (
     <div>
         <h1> Tools & Skills</h1>
         <h4> The Tools & Skills I have learned so far...</h4>
        <div className='gridContainer'>
            <div class="grid_item">
                <DiGithubBadge size="6em"/>
                <p>Github</p>
            </div>
            <div class="grid_item">
                <DiVisualstudio size="6em"/>
                <p>VSCODE</p>
            </div>
            <div class="grid_item">
                <DiHtml5 size="6em"/>
                <p>HTML5</p>
            </div>
            <div class="grid_item">
                <DiResponsive size="6em"/>
                <p>Responsive Website</p>
            </div>
            <div class="grid_item">
                <DiCss3 size="6em"/>
                <p>CSS3</p>
            </div>
            <div class="grid_item">
                <DiCss3 size="6em"/>
                <p>JS</p>
            </div>
            <div class="grid_item">
                <DiBootstrap size="6em"/>
                <p>Bootstrap</p>
            </div>
            <div class="grid_item">
                <DiJqueryLogo size="6em"/>
                <p>Jquery</p>
            </div>
            <div class="grid_item">
                <DiNodejsSmall size="6em"/>
                <p>nodejs</p>
            </div>
        </div>
        <h4> I am currently learning <u>React</u>.</h4>
     </div> 

    )
}