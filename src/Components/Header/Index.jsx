import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import style from '../Header/Index.module.css';
import Logo from '/other/logo.png';

function Index() {
  const [activeSection, setActiveSection] = useState('#home');
  const [expanded, setExpanded] = useState(false); // Add state for Navbar collapse

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#about', '#education', '#experience', '#skills', '#project', '#contact'];
      let currentSection = '#home';

      sections.forEach(section => {
        const element = document.querySelector(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth <= 769) {
      setExpanded(false); // Collapse the navbar after click
    }
  };

  return (
    <Navbar expand="lg" className={`bg-white ${style.navbar}`} expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" width='140px' height='60px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav" className={style.navbar_right}>
          <Nav className="m-2">
            <a href="#about" className={`${style.myLink} ${activeSection === '#about' ? style.active : ''}`} onClick={handleNavClick}>About Me</a>
          </Nav>
          <Nav className="m-2">
            <a href="#education" className={`${style.myLink} ${activeSection === '#education' ? style.active : ''}`} onClick={handleNavClick}>Education</a>
          </Nav>
          <Nav className="m-2">
            <a href="#experience" className={`${style.myLink} ${activeSection === '#experience' ? style.active : ''}`} onClick={handleNavClick}>Experience</a>
          </Nav>
          <Nav className="m-2">
            <a href="#skills" className={`${style.myLink} ${activeSection === '#skills' ? style.active : ''}`} onClick={handleNavClick}>Skills</a>
          </Nav>
          <Nav className="m-2">
            <a href="#project" className={`${style.myLink} ${activeSection === '#project' ? style.active : ''}`} onClick={handleNavClick}>Projects</a>
          </Nav>
          <Nav className="m-2">
            <a href="#contact" className={`${style.myLink} ${activeSection === '#contact' ? style.active : ''}`} onClick={handleNavClick}>Contact Me</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Index;