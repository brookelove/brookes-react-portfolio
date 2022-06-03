import React from "react";

// ({ someValurable }) = props.someVariable
const Project = ({ project }) => {
  return (
    <div className="card">
      <div className="card_img card-6"></div>
      <h2 className="cardTitle">{project.title}</h2>
      <p>{project.body}.</p>
      <ul>
        <li>
          <a href={project.website}>
            Link to Video
          </a>
        </li>
        <li>
          <a href={project.github}>Github</a>
        </li>
      </ul>
    </div>
  );
};

export default Project;
