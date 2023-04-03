import React, { useRef, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-scroll';
import './HomePage.css';
import { Parallax } from 'react-parallax';
import backgroundImages from '../images/homepage2-bg.jpg';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

function HomePage() {
  const welcomeRef = useRef(null);
  const location = useLocation();

  const handleClick = () => {
    const welcomeSection = document.getElementById('welcome-page');
    // scroll down to the welcome section
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  useEffect(() => {
    const welcomeSection = document.getElementById('welcome-page');
    // scroll to the top of the page on load
    window.scrollTo({ top: 0 });
    // scroll to the welcome section if it exists
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, []);

  return (
    <div className="home-page">
      <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={20}>
      <Parallax bgImage={backgroundImages} strength={500}>
      <div className="homepage-container">
      <h1 class="header">Cntrd MindBody<span class="copyright">&copy; 2023</span></h1>
      <p className="brand">"Empowering optimal wellness through a balanced mind and body."</p>
        </div>
        <div className="button-container">
        <Link to="welcome-page" smooth={true} duration={1000}>
        <button className="button" onClick={handleClick}>Start Your Journey Here</button>
        </Link>
        </div>
      </Parallax>
      </CSSTransition>
      </TransitionGroup>
      <div ref={welcomeRef} id="welcome-page"></div>
    </div>
  );
}

export default HomePage;
