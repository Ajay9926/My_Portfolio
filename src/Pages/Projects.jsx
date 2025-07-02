import React from 'react';
import style from '../Styles/Projects.module.css';
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import projectData from '../assets/data/projectData.json'

const Projects = () => {
  return (
    <div className={style.project} id='project'>
      <h1>Projects :</h1>
      <div className={style.container}>
        {projectData.projects.map((project, index) => (
          <div key={index} className={style.card}>
            <img alt={`${project.title} Image`} src={project.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={style.buttons}>
              <a href={project.github}>
                <FaGithub />
              </a>
              <a href={project.liveDemo}>
                <AiOutlineGlobal />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
