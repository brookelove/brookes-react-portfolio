import React from "react"
import "../styles/Projects.css"

export default function Navbar () {
    return (
        <div id="projects"className="projectsContainer">
            <h1>Projects</h1>
            <h4> Here are a few of the projects I have worked on</h4>
            <div className="container">
                <div className="card">
                    <div className="card_img card-1"></div>
                    <h2 className="cardTitle">Film Sage</h2>
                    <p>Our motivation was to build a web based app to help users with a movie choice descision with their own text based input that will determine the emotional weight of their input and suggest some movies to watch!
                    We built the project to help with descision burnout in a fun way, while also providing links to other resources incase a user may need it.</p>
                    <ul>
                        <li><a href="https://github.com/brookelove/movie-mood">Website</a></li>
                        <li><a href="https://remotemana.github.io/movie-mood/">Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img card-2"></div>
                    <h2 className="cardTitle">Disney Pricess Quiz</h2>
                    <p>This will be a quiz on disney princess that even you might not be able to get right! I wrote a quiz on disney princesses that are made of 5 questions and 5 options to choose from. If you get the quesiton right it will automatically go to the next question. You can earn magical points for getting the question wrong you can loose time! Come and check out my quiz.</p>
                    <ul>
                        <li><a href="https://github.com/brookelove/disney-pricesses-code-quiz">Website</a></li>
                        <li><a href="https://brookelove.github.io/disney-pricesses-code-quiz/">Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img card-3"></div>
                    <h2 className="cardTitle">Password-generator</h2>
                    <p>This program is if you need a password, can not make up your own. It will set up parameters that you can pick from and generate a password based. You can pick from 8 to 128 characters </p>
                    <ul>
                        <li><a href="https://brookelove.github.io/8-to-128-password-generator/">Website</a></li>
                        <li><a href="https://github.com/brookelove/8-to-128-password-generator">Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img card-4"></div>
                    <h2 className="cardTitle">Booklastic Blog</h2>
                    <p>Welcome to Booklastic Blog Place! This application is a full-stack blog where bookies can bond. We aim to recruit users from around the world, to create a community of people who love to read! Come visit our site to share with our community what you have been reading and your review (including thoughts, opinions and questions) about your book. Save your review to your personal library page, but also share it with the world! From your personal library page, you can edit/delete your reviews if needed. From the homepage, you can read all reviews and leave comments on their! Interact with others by including questions in your review for them to comment on, or commenting on others reviews. Additionally, use our live chat feature to communicate with bookies in real time!

                    On the backend, we have a library database of books that stores both titles and authors and links to associated genres. You can choose from a book with already have, or add a new one! Additionally, we house a database of our user accounts (first name, email and encrypted passwords). Associated to each user are their blogs, books, and comments!

                    We aim to help you find a good book recommendation (or a few) for the next time you are ready to head to the bookstore!</p>
                    <ul>
                        <li><a href="https://fathomless-bastion-58602.herokuapp.com/">Website</a></li>
                        <li><a href="https://github.com/brookelove/booklastic-blog-place">Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img card-5"></div>
                    <h2 className="cardTitle">Weather App</h2>
                    <p>I wanted to learn more about APIs and Bootstrap. I wanted to understandhow they function so to do that I made weather app. During this application I had to fetch data from an opensource API then put the function back into my card to work. It alowwed me to also understand bootstrap which was a task on it's own.This work was not published to a website.
                    </p>
                    <ul>
                        <li><a href="https://github.com/brookelove/5-day-weather-app">Github</a></li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card_img card-6"></div>
                    <h2 className="cardTitle">E-Commerce Store</h2>
                    <p>This is a backend product that allows people to input data about a store that carries tags, prices, products, and seperates them by categeory that the user intends them for.</p>
                    <ul>
                        <li><a href="https://www.canva.com/design/DAE_5C5rEcM/csd8G0WAccJXoq15ImvbGw/watch?utm_content=DAE_5C5rEcM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Link to Video</a></li>
                        <li><a href="https://github.com/brookelove/E-Commerce-Back-End">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}