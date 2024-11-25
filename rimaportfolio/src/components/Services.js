import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container text-center">
        <h2 className="heading mb-5">
          My <span className="pup">Services</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="service-box">
              <i className="fa-solid fa-code fa-3x mb-3" style={{ color: '#007bff' }}></i>
              <h3 className="h4">Web Development</h3>
              <p>
                In the dynamic realm of web development, I creatively solve problems, mastering HTML, CSS, and JavaScript.
                My journey involves exploring frameworks and libraries to breathe life into innovative digital ideas.
              </p>
              {/* <a href="#" className="btn btn-primary mt-3">Read More</a> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box shadow-lg rounded p-4 mb-4">
              <i className="fa-solid fa-palette fa-3x mb-3" style={{ color: '#28a745' }}></i>
              <h3 className="h4">UI/Ux Design</h3>
              <p>
                Passionate about Web UI, I harmonize aesthetics and functionality, crafting visually seamless digital
                interfaces. With a keen eye for design principles, I elevate user experiences through intuitive and
                engaging web interfaces.
              </p>
              {/* <a href="#" className="btn btn-success mt-3">Read More</a> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box shadow-lg rounded p-4 mb-4">
              <i className="fa-solid fa-laptop-code fa-3x mb-3" style={{ color: '#ffc107' }}></i>
              <h3 className="h4">Web Designing</h3>
              <p>
                Immersed in web design, I blend creativity with functionality to craft visually compelling,
                user-centric experiences. With a keen eye for detail, I transform concepts into aesthetic
                excellence.
              </p>
              {/* <a href="#" className="btn btn-warning mt-3">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
