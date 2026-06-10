import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Software Developer",
        "Web Developer",
        "Web Designer",
        "FullStack Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed("#element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      {/* Background decorations */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="sparkle-overlay"></div>

      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          {/* Hero Left Content */}
          <div className="col-lg-7 home-content text-start">
            <h1 className="fw-black">
              Hi, My name is <span className="pup">Rima</span>
            </h1>
            <h2>
              <span>and I am a passionate</span>
              <span id="element"></span>
            </h2>
            <p className="home-desc">
              I love turning complex problems into elegant, beautiful digital solutions. 
              Specializing in building custom web experiences from robust backend engines 
              to gorgeous pixel-perfect frontend layouts.
            </p>
            
            {/* Social Media handles */}
            <div className="hero-socials">
              <a 
                href="https://www.linkedin.com/in/rima-debnath-142300242" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/Rimadebnath123" 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            {/* Action buttons */}
            <div className="d-flex flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1Wl0GNt3zxOcDn1xbqV-SbxSgZL5dp6Dg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                <i className="fa-solid fa-download"></i> Download CV
              </a>
              <a href="#contact" className="btn-outline-premium">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Hero Right Image */}
          <div className="col-lg-5 d-flex justify-content-center home-img">
            <div className="profile-glow-ring">
              <div className="profile-img-container">
                <img src="image/bg.webp" alt="Rima Debnath Portrait" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
