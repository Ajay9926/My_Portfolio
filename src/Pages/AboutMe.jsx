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
          I am a passionate MERN Stack Developer with hands-on experience in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in creating dynamic, responsive, and scalable web solutions, and I have a strong foundation in both front-end and back-end technologies. With a focus on user experience and performance, I continuously seek to enhance my skills and deliver high-quality projects. I thrive in collaborative environments and enjoy solving complex problems through code.
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
