import React from 'react';
import style from '../Styles/Skills.module.css';
import skillsData from '../assets/data/skillsData.json';

const Skills = () => {
  return (
    <div id="skills" className={style.skillsContainer}>
      <h1>Skills :</h1>
      <div className={style.container}>
        {skillsData.skills.map((skill, index) => (
          <div key={index} className={style.card}>
            <img alt={`${skill.name} logo`} src={skill.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
