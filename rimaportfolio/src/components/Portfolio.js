import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const projectData = [
      {
        title: 'E-commerce Platform',
        description: 'A fully responsive web application for online shopping.',
        imgUrl: 'image/myntra.jpg',
        link: 'https://exquisite-puppy-a18e18.netlify.app/',
      },
      {
        title: 'Web Design',
        description: 'An online food delivery service website.',
        imgUrl: 'image/food.jpg',
        link: 'https://rimadebnath123.github.io/Meal/',
      },
      {
        title: 'Web Design',
        description: 'A digital marketing company website.',
        imgUrl: 'image/MD.webp',
        link: 'https://marketix-digital-side.netlify.app',
      },
      {
        title: 'Web App',
        description: 'A responsive web application for text processing.',
        imgUrl: 'image/text.png',
        link: 'https://rimadebnath123.github.io/firstapp/',
      },
      {
        title: 'Web App',
        description: 'Fullstack application using Django.Only Do Crud operation and token authentication',
        imgUrl: 'image/emp.webp',
        link: 'https://employee-07vx.onrender.com',
      },
    ];
    setPortfolio(projectData);

    // Initialize ScrollReveal after the content is loaded
    ScrollReveal().reveal('.custom-card', {
      distance: '50px',
      duration: 2000,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200, // Stagger effect for each card
      reset: true, // Repeat animations on scroll
    });
  }, []);

  return (
    <section className="project" id="Portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="animate__animated animate__fadeIn">
              <h1 className="heading text-center text-white fw-bold mb-4"style={{ marginTop: '70px' }}>
                Latest <span className="pup fw-bold">Projects</span>
              </h1>
              <p className="text-white fw-bold">Here are my latest projects</p>

              {/* Tab Navigation */}
              <ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Tab 1</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Tab 2</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Tab 3</a>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row">
                    {portfolio.map((project, index) => (
                      <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 custom-card">
                          <img src={project.imgUrl} className="project-card-img" alt={project.title} />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <div className="mt-auto">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-light"
                              >
                                View Project
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tab-pane fade text-white fw-bold" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <p>it is empty</p>
                </div>
                <div className="tab-pane fade text-white fw-bold" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <p>it is empty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
