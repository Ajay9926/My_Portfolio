import React from 'react';
import style from '../Styles/Education.module.css';
import educationData from '../assets/data/educationData.json';

const Education = () => {
  return (
    <div className={style.educationSection} id='education'>
      <h1>Education :</h1>
      <div className={style.educationContent}>
        {educationData.education.map((item, index) => (
          <div key={index} className={style.child}>
            <h4>{item.institution}</h4>
            <h5>{item.degree}</h5>
            <span className={style.dates}>{item.dateRange}</span>
            <h6>{item.field}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
