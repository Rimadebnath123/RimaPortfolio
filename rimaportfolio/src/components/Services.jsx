import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container text-center">
        <h2 className="heading mb-5 text-white fw-bold mt-5">
          My <span style={{ color: '#ffe91e' }}>Services</span>
        </h2>
        <div className="row justify-content-center g-4 mt-2">
          
          {/* Card 1: Web Development */}
          <div className="col-md-4">
            <div className="glass-card service-card service-card-1">
              <div className="service-icon-box">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                In the dynamic realm of web development, I creatively solve problems, mastering HTML, CSS, and JavaScript.
                My journey involves exploring frameworks and libraries to breathe life into innovative digital ideas.
              </p>
            </div>
          </div>

          {/* Card 2: Full Stack Developer */}
          <div className="col-md-4">
            <div className="glass-card service-card service-card-2">
              <div className="service-icon-box">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3>Full Stack Developer</h3>
              <p>
                As a Full Stack Developer, I specialize in creating dynamic, end-to-end web solutions, integrating
                robust backend systems with seamless frontend interfaces. With expertise in both server-side logic
                and user-centric design, I deliver efficient, scalable, and innovative applications.
              </p>
            </div>
          </div>

          {/* Card 3: Web Designing */}
          <div className="col-md-4">
            <div className="glass-card service-card service-card-3">
              <div className="service-icon-box">
                <i className="fa-solid fa-palette"></i>
              </div>
              <h3>Web Designing</h3>
              <p>
                Immersed in web design, I blend creativity with functionality to craft visually compelling,
                user-centric experiences. With a keen eye for detail, I transform concepts into aesthetic
                excellence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
