import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    // Adjust text size dynamically based on text length
    const adjustTextSize = () => {
      const serviceBoxes = document.querySelectorAll('.service-box');
      serviceBoxes.forEach((box) => {
        const text = box.querySelector('p');
        const boxHeight = box.offsetHeight;
        if (text.scrollHeight > boxHeight) {
          text.style.fontSize = '0.9rem'; // Adjust font size to fit
        } else {
          text.style.fontSize = '1rem'; // Default size
        }
      });
    };

    adjustTextSize();
    window.addEventListener('resize', adjustTextSize); // Reapply on window resize
    return () => window.removeEventListener('resize', adjustTextSize);
  }, []);

  return (
    <section id="services" className="services">
      <div className="container text-center">
        <h2 className="heading mb-5">
          My <span className="pup">Services</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="service-box shadow-lg rounded p-4 mb-5">
              <i className="fa-solid fa-code fa-3x mb-3" style={{ color: '#007bff' }}></i>
              <h3 className="h4">Web Development</h3>
              <p>
                In the dynamic realm of web development, I creatively solve problems, mastering HTML, CSS, and JavaScript.
                My journey involves exploring frameworks and libraries to breathe life into innovative digital ideas.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box shadow-lg rounded p-4 mb-4">
              <i className="fa-solid fa-laptop-code fa-3x mb-3" style={{ color: '#fd7e14' }}></i>
              <h3 className="h4">Full Stack Developer</h3>
              <p>
                As a Full Stack Developer, I specialize in creating dynamic, end-to-end web solutions, integrating
                robust backend systems with seamless frontend interfaces. With expertise in both server-side logic
                and user-centric design, I deliver efficient, scalable, and innovative applications.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box shadow-lg rounded p-4 mb-5">
              <i className="fa-solid fa-palette fa-3x mb-3" style={{ color: '#ffc107' }}></i>
              <h3 className="h4">Web Designing</h3>
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
