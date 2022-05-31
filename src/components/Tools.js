import React from 'react';
import { DiGithubBadge, DiVisualstudio, DiHtml5, DiCss3, DiBootstrap, DiJqueryLogo, DiNodejsSmall, DiReact} from "react-icons/di";
import { MdOutlineDevicesOther } from "react-icons/md";
import { IconContext } from 'react-icons';
import '../styles/Tools.css';


export default function Tools () {
    return (
     <div className='toolContainer'>
         <h1> Tools & Skills</h1>
         <h4> The Tools & Skills I have learned so far...</h4>
        <div className='gridContainer'>
            <div class="grid_item">
                <DiGithubBadge size="5em"/>
                <p>Github</p>
            </div>
            <div class="grid_item">
                <DiVisualstudio size="5em"/>
                <p>VSCODE</p>
            </div>
            <div class="grid_item">
                <DiHtml5 size="5em"/>
                <p>HTML5</p>
            </div>
            <div class="grid_item">
                <MdOutlineDevicesOther size="5em"/>
                <p>Responsive Website</p>
            </div>
            <div class="grid_item">
                <DiCss3 size="5em"/>
                <p>CSS3</p>
            </div>
            <div class="grid_item">
                <DiCss3 size="5em"/>
                <p>JS</p>
            </div>
            <div class="grid_item">
                <DiBootstrap size="5em"/>
                <p>Bootstrap</p>
            </div>
            <div class="grid_item">
                <DiJqueryLogo size="5em"/>
                <p>Jquery</p>
            </div>
            <div class="grid_item">
                <DiNodejsSmall size="5em"/>
                <p>Nodejs</p>
            </div>
            <div class="grid_item">
                <DiReact size="5em"/>
                <p>React</p>
            </div>
        </div>
        {/* have to figure out why there is no space here */}
        <h4> I am currently learning <u>React</u>.</h4>
     </div> 
    )
}