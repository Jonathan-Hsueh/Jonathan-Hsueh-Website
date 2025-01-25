import { useState } from "react";
import "./Background.css";
import IMG3474 from "../../images/IMG_3474 2.jpg";
import IMG3480 from "../../images/IMG_3480 2.jpg";
import IMG3737 from "../../images/IMG_3737.jpg";
import IMG7922 from "../../images/magiscatwalk.jpg";
import lightModeIcon from "../../images/mode-light-icon.png";
import darkModeIcon from "../../images/mode-dark-icon.png";
import githubIcon from "../../images/github-icon.png";
import Card from "./Card";

function Background() {
  const text1 =
    "Welcome to my research! As a culturally invested high school student and proponent of AI real-world integration, I believe there is so much opportunity with the things we do. That's why I want to use research to end dangerous gun violence. Feel free to check it out.";
  const link1 = "https://research-archive.org/index.php/rars/preprint/view/1162";
  const link2 = "https://research-archive.org/index.php/rars/preprint/view/1161";

  const [isDark, setIsDark] = useState(true);

  const toggleBackground = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? "lightMode" : "darkMode";
  };

  return (
    <div className={`background ${isDark ? "dark" : "light"}`}>
      {/* Header Section */}
      <header className="header">
        <h1 className="header-text">Jonathan Hsueh's Website</h1>
        <a
          href="https://github.com/Jonathan-Hsueh"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Empowering AI Research for a Safer World</h2>
        <p>
          Join me in using AI to address real-world challenges and create a
          meaningful impact.
        </p>
      </section>

      {/* Card Section */}
      <main className="card-container">
        <Card
          image1={IMG3474}
          image2={IMG3480}
          content={text1}
          isDark={isDark}
          link={link1}
        />
        <Card
          image1={IMG3474}
          content={text1}
          isDark={isDark}
          link={link2}
        />
        <Card
          image1={IMG3474}
          content={text1}
          isDark={isDark}
          link={link2}
        />
        <Card
          image1={IMG3474}
          content={text1}
          isDark={isDark}
          link={link2}
        />
      </main>

      {/* Toggle Button */}
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleBackground}>
          <img
            src={isDark ? lightModeIcon : darkModeIcon}
            alt="Mode Toggle Icon"
          />
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>
          Made with ❤️ by Jonathan Hsueh. Explore{" "}
          <a href="https://github.com/Jonathan-Hsueh" target="_blank">
            my GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default Background;
