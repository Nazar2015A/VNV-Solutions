import React from "react";

import "./project.css";

const Project = ({item}) => {
  
  return (
    <div className="project-wrapper">
          <img src={item.img} alt="" />
          <div className="disc">
            <h1>{item.text}</h1>
            <p>Знижка <span className="disc-green">{item.discount}</span></p>
          </div>
    </div>
  );
};

export default Project;
