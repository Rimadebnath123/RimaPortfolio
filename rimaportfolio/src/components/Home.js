import React, { useEffect } from "react";
import Typed from "typed.js";


const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Software Developer", "Web Developer", "Web Designer","FullStack Developer"],
      typeSpeed: 50,
    };

    const typed = new Typed("#element", options);

    // Cleanup function to destroy Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="vh-100">
      <div className="home-content mt-4">
        <h1>
          Hi, My name is <span className="pup">Rima</span>
        </h1>
        <h2>
          <div>and I am a passionate</div>
          <span id="element"></span>
        </h2>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/rima-debnath-142300242">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Rimadebnath123">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1Wl0GNt3zxOcDn1xbqV-SbxSgZL5dp6Dg/view?usp=sharing"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="image/bg.webp" alt="home" />
      </div>
    </section>
  );
};

export default Home;
