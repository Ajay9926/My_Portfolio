import React from 'react'
import style from '../../Components/Footer/Index.module.css'
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

const Index = () => {
  return (
    <div>
      <div className={style.footerMain}>
        <div className={style.child}>
          <a href="tel:+919926141274">
            <IoCall /><span>+91-99261 41274</span>
          </a>
        </div>
        <div className={style.child}>
          <a href="mailto:ajayrajvarala7415@gmail.com">
            <SiGmail /><span>ajayrajvarala7415@gmail.com</span>
          </a>
        </div>
        <div className={style.child}>
          <a href='https://github.com/Ajay9926/' style={{ margin: '0px 5px' }}>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/ajay-raj-varala-23a90b251/' style={{ margin: '0px 5px' }}>
            <FaLinkedin />
          </a>
          <a href='https://my-portfolio-lyart-tau.vercel.app/' style={{ margin: '0px 5px' }}>
            <AiOutlineGlobal />
          </a>
        </div>
      </div>
      <h6 className={style.copy}>2024 Made By @Ajay Raj Varala...</h6>
    </div>
  )
}

export default Index