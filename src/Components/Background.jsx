import { useState } from "react";
import "./Background.css";
import painresearch1 from "../../images/painresearch1.png";
import painresearch2 from "../../images/painresearch2.png";
import mediaresearch1 from "../../images/mediaresearch1.png";
import mediaresearch2 from "../../images/mediaresearch2.png";
import lightModeIcon from "../../images/mode-light-icon.png";
import darkModeIcon from "../../images/mode-dark-icon.png";
import githubIcon from "../../images/github-icon.png";
import Card from "./Card";

function Background() {
  const painresearchtext =
    "Published How is Artificial Intelligence Helping the Diagnosis of Pain? on the Research Archive of Rising Scholars, achieving 40+ downloads. Self-taught in medical concepts like sepsis and pain diagnostics, reviewed CNN, KNN, and SVM models across 100+ resources, and achieved an 85.05% detection rate and 73.90% intensity rate to explore AI's role in pain diagnosis.";
const mediaresearchtext =
    "Published Social Media Psychological Impacts across Race and Gender on the Research Archive of Rising Scholars with 50+ downloads. Analyzed how social media affects mental health across race and gender, highlighting issues like insomnia, distress, and suicidal behaviors, while identifying positive impacts like video calling and supportive communities. Submitted findings to the Polygence Symposium, contributing to academic discussions and receiving feedback from professors."
;
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
          image1={painresearch1}
          image2={painresearch2}
          content={painresearchtext}
          isDark={isDark}
          link={link1}
        />
        <Card
          image1={mediaresearch1}
          image2={mediaresearch2}
          content={mediaresearchtext}
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
