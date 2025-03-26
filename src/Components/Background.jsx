import { useState } from "react";
import "./Background.css";
/*Research Images*/
import globalmedia1 from "../../images/globalmediaimg1.png";
import globalmedia2 from "../../images/globalmediaimg2.png";
import centrova1 from "../../images/centrovaimg1.png";
import centrova2 from "../../images/centrovaimg2.png";
import godseye1 from "../../images/godseyeimg1.png";
import godseye2 from "../../images/godseyeimg2.png";
import painresearch1 from "../../images/painresearch1.png";
import painresearch2 from "../../images/painresearch2.png";
import mediaresearch1 from "../../images/mediaresearch1.png";
import mediaresearch2 from "../../images/mediaresearch2.png";
import gunresearch1 from "../../images/gunresearch1.png";
import gunresearch2 from "../../images/gunresearch2.png";
import skinresearch1 from "../../images/skinresearch1.png"
import skinresearch2 from "../../images/skinresearch2.png"
import godseyewebsite1 from "../../images/godseyewebsite1.png"
import godseyewebsite2 from "../../images/godseyewebsite2.png"

/*Other Icons*/
import lightModeIcon from "../../images/mode-light-icon.png";
import darkModeIcon from "../../images/mode-dark-icon.png";
import githubIcon from "../../images/github-icon.png";
import Card from "./Card";

function Background() {
  const painresearchtext =
      "Published \"How is Artificial Intelligence Helping the Diagnosis of Pain?\" on the Research Archive of Rising Scholars, achieving 40+ downloads. Self-taught in medical concepts like sepsis and pain diagnostics, reviewed CNN, KNN, and SVM models across 100+ resources, and achieved an 85.05% detection rate and 73.90% intensity rate to explore AI's role in pain diagnosis.";
  const mediaresearchtext =
      "Published \"Social Media Psychological Impacts across Race and Gender\" on the Research Archive of Rising Scholars with 50+ downloads. Analyzed how social media affects mental health across race and gender, highlighting issues like insomnia, distress, and suicidal behaviors, while identifying positive impacts like video calling and supportive communities. Submitted findings to the Polygence Symposium, contributing to academic discussions and receiving feedback from professors."
  ;
  const gunresearchtext = 
      "\"Construction of a YOLOv8 surveillance system using gun detection to prevent Mass Shootings.\" Trained 5 industry leading open-source detection models on datasets of over 10000, achieve results of 98.2% mAP. Created a hosting-streaming system and working on an open-source website with an Integrated AI python frontend. This link is strictly for the research paper which is currently being published."
  ;
  const skinresearchtext = 
      "\"OpenCV and Tensorflow for the Construction of a YOLOv11 Skin Cancer Detection System with Transfer Learning.\" Utilizing ultralytics YOLO models, specifically versions 11, I employed transfer learning on models totalling 14000 images to train and enhance skin cancer imaging. Using transfer learning for model training and gathering data from Taichung Rong Zong Hospital."
  ;
  const godseyewebsitetext = 
      "Written in Python with a Streamlit framework, this website allows for seamless security detection. The intuitive UI sends image data directly to a trainined YOLO model, which sends processed footage to the website. It has image and video uploading, webcam, and RTMP streamling link detection capabilities, and it automatically calculates latency and FPS benchmark metrics. "
  ;
  const globalmediatext = 
      "A website that presents a holistic viewpoint of public social media sentiment about US executive actions. Data analysis powered by few-shot prompting, data scraping, and sentiment analysis. Website written in TSX and tailwind, using keyframes, APIs, and ChartJS. Won first place at UCSB Datathon 2025 in the Natural Language Processing track."
  ;
  const centrovatext = 
      "Centrova is a startup that uses an AI wrapper to match patients to relevant medical trials, and I work as a frontend engineer on the patient selection page. I've designed an intuitive file upload modal with hotkey systems and bug fixes, and I'm working on a Python data scraper to summarize patient data."
  ;
  const link1 = "https://research-archive.org/index.php/rars/preprint/view/1162";
  const link2 = "https://research-archive.org/index.php/rars/preprint/view/1161";
  const linkgm = "https://globalmediatracker.vercel.app/home";
  const linkge = "https://github.com/Jonathan-Hsueh/gods-eye";
  const linkct = "https://d2cfj455yy12x6.cloudfront.net/";

  const [isDark, setIsDark] = useState(true);

  const toggleBackground = () => {
    setIsDark(!isDark);
    document.body.className = isDark ? "lightMode" : "darkMode";
  };

  return (
    <div className={`background ${isDark ? "dark" : "light"}`}>
      
      <header className="header">
        <h1 className="header-text">Jonathan Hsueh</h1>
        <a
          href="https://github.com/Jonathan-Hsueh"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </a>
      </header>

      
      <section className="hero">
        <h2>Empowering AI Research for a More Promising Future</h2>
        <p>
          Join me in using AI to address real-world challenges and create a
          meaningful impact. I'm passionate about AI, Webdev, and Internet-of-Things applications 
          in security, health, and design. More to come in the future!
        </p>
      </section>

      <main className="card-container">
        <Card
        image1={globalmedia1}
        image2={globalmedia2}
        content={globalmediatext}
        link={linkgm}
        isDark={isDark}
        />

        <Card
        image1={godseye1}
        image2={godseye2}
        content={godseyewebsitetext}
        link={linkge}
        isDark={isDark}
        />

        <Card
        image1={centrova1}
        image2={centrova2}
        content={centrovatext}
        link={linkct}
        isDark={isDark}
        />
    
        <Card
        image1={gunresearch1}
        image2={gunresearch2}
        content={gunresearchtext}
        isDark={isDark}
        />

        <Card
          image1={painresearch1}
          image2={painresearch2}
          content={painresearchtext}
          isDark={isDark}
          link={link1}
        />
        <Card
          image1={skinresearch1}
          image2={skinresearch2}
          content={skinresearchtext}
          isDark={isDark}
        />
        <Card
          image1={mediaresearch1}
          image2={mediaresearch2}
          content={mediaresearchtext}
          isDark={isDark}
          link={link2}
        />
      </main>

      {}
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleBackground}>
          <img
            src={isDark ? lightModeIcon : darkModeIcon}
            alt="Mode Toggle Icon"
          />
        </button>
      </div>

      {}
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
