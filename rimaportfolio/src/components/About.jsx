import React, { useEffect, useState } from "react";

const About = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Basic scroll observer to animate progress bars when they are visible
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isInViewport) {
          setAnimateProgress(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Trigger check immediately in case page loads directly on section
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillsData = [
    { skill: "HTML5 / CSS3", percentage: 85 },
    { skill: "JavaScript / React", percentage: 80 },
    { skill: "Java", percentage: 80 },
    { skill: "Python / Django", percentage: 85 },
    { skill: "SQL / Databases", percentage: 75 },
  ];

  return (
    <section id="about" className="py-5">
      <div className="container mt-5">
        <div className="row g-4 align-items-stretch">
          
          {/* Left Column: Avatar & Basic Details Card */}
          <div className="col-lg-5">
            <div className="glass-card about-card-left text-start">
              <div className="about-avatar-wrapper">
                <img
                  src="image/pic.jpg"
                  alt="Rima Debnath"
                  className="img-fluid"
                />
              </div>
              
              <div className="about-info mt-4">
                <p>
                  <span className="title-s">Name:</span>
                  <span>Rima Debnath</span>
                </p>
                <p>
                  <span className="title-s">Role:</span>
                  <span>Software Developer</span>
                </p>
                <p>
                  <span className="title-s">Experience:</span>
                  <span>6 Months</span>
                </p>
                <p>
                  <span className="title-s">Address:</span>
                  <span>Kolkata, India</span>
                </p>
              </div>

              {/* Skills Progress Blocks */}
              <div className="skills-container mt-4">
                <h4 className="h6 text-uppercase fw-bold text-gradient mb-3">Core Expertise</h4>
                {skillsData.map(({ skill, percentage }) => (
                  <div key={skill} className="skill-bar-wrapper">
                    <div className="skill-info">
                      <span className="skill-name">{skill}</span>
                      <span className="skill-percent">{percentage}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{ width: animateProgress ? `${percentage}%` : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Info Grid */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column justify-content-center text-start">
              <h2 className="about-heading fw-bold">
                About <span style={{ color: '#ffe91e' }}>Me</span>
              </h2>
              <p className="about-text">
                As an aspiring and enthusiastic individual, I find joy in both teaching and coding. 
                My passion lies in exploring new technologies and creating innovative solutions. 
                I am a dedicated teacher, striving to impart knowledge and inspire my students. 
                In my coding journey, I enjoy the process of learning and applying new concepts to build exciting projects. 
                Beyond coding, I am an avid reader and a music enthusiast, finding inspiration in the rhythm of life.
              </p>

              {/* Bio Highlights Grid */}
              <div className="bio-details-grid">
                <div className="bio-item">
                  <strong>Domain</strong>
                  <span>Web & FullStack</span>
                </div>
                <div className="bio-item">
                  <strong>Education</strong>
                  <span>B.Tech Graduate</span>
                </div>
                <div className="bio-item">
                  <strong>Languages</strong>
                  <span>English, Hindi, Bengali</span>
                </div>
                <div className="bio-item">
                  <strong>Interests</strong>
                  <span>Traveling, Teaching</span>
                </div>
              </div>

              {/* Secondary Skills Tag Deck */}
              <div className="mt-3">
                <h4 className="h6 text-uppercase fw-bold text-gradient-pink-yellow mb-3">Tech Stack & Tools</h4>
                <div className="d-flex flex-wrap gap-2">
                  {["React", "HTML5", "CSS3", "JavaScript", "Java", "Python", "C", "SQL", "Bootstrap 5", "Django", "Git & GitHub", "Excel","Microsoft Office"].map((tag) => (
                    <span 
                      key={tag} 
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        color: "#e2e8f0"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
