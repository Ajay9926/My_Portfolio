import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Pages/AboutMe';
import Header from './Components/Header/Index'
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Index'

const App = () => {
  return (
    <Router>
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
