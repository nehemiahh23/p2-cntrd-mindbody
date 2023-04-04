import React, { useRef,useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll';
import {useLocation} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import backgroundImage from '../images/welcomepage2-bg.jpg';
import './WelcomePage.css';


function WelcomePage() {
  const location = useLocation();
  const formRef = useRef(null);

  const handleClick = () => {
    const formSection = document.getElementById('form-page');
    // scroll down to the welcome section
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  useEffect(() => {
    const formSection = document.getElementById('form-page');
    // scroll to the top of the page on load
    window.scrollTo({ top: 0 });
    // scroll to the welcome section if it exists
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, []);
  

  return (
    <div id="welcome-page">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={50}>
          <Parallax bgImage={backgroundImage} strength={600}>
            <div className="welcome-container">
              <h1 className="header1">Quote Of The Day</h1>
              <p className="welcome-message">“Living in the moment is learning how to live between the big moments. It is learning how to make the most of the in-betweens and having the audacity to make those moments just as exciting.”</p>
              <h3 className="author">Morgan Harper Nichols</h3>
            </div>
            <div className="button-container">
              <Link to="form-page" smooth={true} duration={1000}>
                <button className="button1" onClick={handleClick}>Daily Check-In 🙂</button>
              </Link>
            </div>
          </Parallax>
        </CSSTransition>
      </TransitionGroup>
      <div ref={formRef} id="form-page"></div>
    </div>
  );
}

export default WelcomePage;
