import React from 'react';
import style from '../Styles/Experience.module.css';
import experienceData from '../assets/data/experienceData.json';

const Experience = () => {
  return (
    <div id='experience' className={style.expSection} >
      <h1>Experience :</h1>
      <div className={style.childSection}>
        {experienceData.experience.map((item, index) => (
          <div key={index} className={style.child}>
            <img src={item.logo} alt={`logo-${index}`} />
            <h3>{item.company}</h3>
            <h5>{item.role}</h5>
            <h6>{item.duration}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
