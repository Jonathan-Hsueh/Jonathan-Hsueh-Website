
import { useState } from 'react';
import './Background.css';

import IMG3474 from '../../images/IMG_3474 2.jpg';
import IMG3480 from '../../images/IMG_3480 2.jpg';
import IMG3737 from '../../images/IMG_3737.jpg';
import IMG7922 from '../../images/magiscatwalk.jpg';
import lightModeIcon from '../../images/mode-light-icon.png';
import darkModeIcon from '../../images/mode-dark-icon.png';

// Placeholder GitHub icon - replace with your actual file/import
import githubIcon from '../../images/github-icon.png';

import Card from './Card';

function Background() {
  const text1 =
    "Welcome to my research! As a culturally invested high school student and proponent of AI real-world integration, I believe there is so much opportunity with the things we do. That's why I want to use research to end dangerous gun violence. Feel free to check it out.";

  const link1 = "https://research-archive.org/index.php/rars/preprint/view/1162";
  const link2 = "https://research-archive.org/index.php/rars/preprint/view/1161";
  const [isDark, setIsDark] = useState(true);

  const toggleBackground = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? 'lightMode' : 'darkMode';
  };

  return (
    <div className="background">
      {}
      <div className={`header ${isDark ? 'darkheader' : 'lightheader'}`}>
        <p className="headertext">Jonathan Hsueh's Website</p>

        <div>
          {}
          <a href="https://github.com/Jonathan-Hsueh" target="_blank" rel="noopener noreferrer" className="github-link">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </div>

      {/* Main content area below header */}
      <div className="outerdesign">
        <div className="cardcontainer">
          <Card
            image1={IMG3474}
            image2={IMG3480}
            image3={IMG3737}
            image4={IMG7922}
            content={text1}
            isDark={isDark}
            link={link1}
          />
          <Card
            image1={IMG3474}
            image2={IMG3480}
            image3={IMG3737}
            image4={IMG7922}
            content={text1}
            isDark={isDark}
            link={link2}
          />
          {/* Add as many <Card /> components as you like */}
        </div>

        {/* Toggle Theme Button */}
        <div className="button-container">
          <button className="toggle-circle" onClick={toggleBackground}>
            <img
              src={isDark ? lightModeIcon : darkModeIcon}
              alt="Mode Toggle Icon"
              className="toggle-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;
