import React from 'react'
import style from '../Styles/AboutMe.module.css'
import Image from '/other/Untitled.png'
import Resume from '../../public/pdf/Ajay_Mern_Resume.pdf'

const AboutMe = () => {
  return (
    <div className={style.container} id='about'>
      <div className={style.textSection}>
        <h1>Hello! I Am</h1>
        <h2>Ajay Raj Varala</h2>
        <p>
          Passionate Frontend Developer with over 2+ years of hands-on experience crafting responsive, user-friendly web applications using HTML, CSS, JavaScript, React.js, Next.js, Material-UI, Bootstrap, and Tailwind CSS. I focus on writing clean, efficient, and maintainable code while ensuring seamless UI/UX experiences. I thrive in fast-paced, collaborative environments and have a keen eye for design detail. I enjoy transforming ideas into interactive digital solutions and constantly seek to improve performance, accessibility, and cross-browser compatibility.
        </p>
        <a className={style.button} href={Resume} download>Download Resume</a>
      </div>
      <div className={style.imageSection}>
        <img src={Image} alt="Illustration of a developer working on a laptop with MERN stack logos above" />
      </div>
    </div>
  )
}

export default AboutMe
