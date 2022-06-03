import React from "react";
import { Project } from "./Project";

export const information = {
  project1: {
    title: "Film Sage",
    body: "Our motivation was to build a web based app to help users with a movie choice descision with their own text based input that will determine the emotional weight of their input and suggest some movies to watch",
    website: "//github.com/brookelove/movie-mood",
    github: "movie-mood",
  },
  project2: {
    title: "Disney Pricess Quiz",
    body: "This will be a quiz on disney princess that even you might not be able to get right! I wrote a quiz on disney princesses that are made of 5 questions and 5 options to choose from. If you get the quesiton right it will automatically go to the next question. You can earn magical points for getting the question wrong you can loose time! Come and check out my quiz.",
    website: "https://github.com/brookelove/disney-pricesses-code-quiz",
    github: "brookelove.github.io/disney-pricesses-code-quiz/",
  },
  project3: {
    title: "Password Generator",
    body: "This program is if you need a password, can not make up your own. It will set up parameters that you can pick from and generate a password based. You can pick from 8 to 128 characters.",
    website: "https://brookelove.github.io/8-to-128-password-generator/",
    github: "8-to-128-password-generator",
  },
  project4: {
    title: "Booklastic Blog",
    body: "Welcome to Booklastic Blog Place! This application is a full-stack blog where bookies can bond. We aim to recruit users from around the world, to create a community of people who love to read! Come visit our site to share with our community what you have been reading and your review (including thoughts, opinions and questions) about your book. Save your review to your personal library page, but also share it with the world! From your personal library page, you can edit/delete your reviews if needed. From the homepage, you can read all reviews and leave comments on their! Interact with others by including questions in your review for them to comment on, or commenting on others reviews. Additionally, use our live chat feature to communicate with bookies in real time!",
    website: "https://fathomless-bastion-58602.herokuapp.com/",
    github: "booklastic-blog-place",
  },
  project5: {
    title: "Weather App",
    body: "I wanted to learn more about APIs and Bootstrap. I wanted to understandhow they function so to do that I made weather app. During this application I had to fetch data from an opensource API then put the function back into my card to work. It alowwed me to also understand bootstrap which was a task on its own.This work was not published to a website.",
    github: "5-day-weather-app",
  },
  project6: {
    title: "E-Commerce Store",
    body: "I wanted to learn more about APIs and Bootstrap. I wanted to understandhow they function so to do that I made weather app. During this application I had to fetch data from an opensource API then put the function back into my card to work. It alowwed me to also understand bootstrap which was a task on its own.This work was not published to a website.I have a video showing what the backend attached to the link below",
    website:
      "https://www.canva.com/design/DAE_5C5rEcM/csd8G0WAccJXoq15ImvbGw/watch?utm_content=DAE_5C5rEcM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    github: "E-Commerce-Back-End",
  },
};

const Display = () => {
  return (
    <div>
      {/* {Object.keys(information).map((info) => (
                  <Project key={info.id} title={info.title} body={info.body} website={info.website} github={info.github}
            )} */}
        {Object.keys(information).map(project => (
            <Project project={information[project]} />
        ))}
    </div>
  );
};

export default Display;
