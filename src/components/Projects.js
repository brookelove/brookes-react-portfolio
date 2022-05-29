import React from "react"
import "../styles/Projects.css"

export default function Navbar () {
    return (
        <div>
            <h1>Projects</h1>
            <h4> Here are a few of the projects I have worked on</h4>
            <div className="container">
                <div className="card">
                    <div className="card_img"></div>
                    <h2>Title</h2>
                    <p>Text</p>
                    <ul>
                        <li><a>Website</a></li>
                        <li><a>Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img"></div>
                    <h2>Title</h2>
                    <p>Text</p>
                    <ul>
                        <li><a>Website</a></li>
                        <li><a>Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img"></div>
                    <h2>Title</h2>
                    <p>Text</p>
                    <ul>
                        <li><a>Website</a></li>
                        <li><a>Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}