import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = () => {
      const projectData = [
        {
          title: 'E-commerce Platform',
          description: 'A fully responsive web application...',
          imgUrl: 'image/myntra.jpg',
          link: 'https://exquisite-puppy-a18e18.netlify.app/',
        },
        {
          title: 'Web Design',
          description: 'It is an Online Food Delivery Service Website...',
          imgUrl: 'image/food.jpg',
          link: 'https://rimadebnath123.github.io/Meal/',
        },
        {
          title: 'Web Design',
          description: 'It is a Digital Marketing Company Website...',
          imgUrl: 'image/MD.webp',
          link: 'https://marketix-digital-side.netlify.app',
        },
        {
          title: 'Web App',
          description: 'A responsive web application developed...',
          imgUrl: 'image/text.png',
          link: 'https://rimadebnath123.github.io/firstapp/',
        },
      ];
      setPortfolio(projectData);
    };

    fetchPortfolio();

    // Initialize ScrollReveal after content is loaded
    const sr = ScrollReveal({
      distance: '50px',
      duration: 2000,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true, // Animation repeats on scroll
    });

    sr.reveal('.custom-card', { interval: 200 }); // Targets all cards
  }, []);

  return (
    <section className="project" id="Portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="animate__animated animate__fadeIn">
              <h2 className="heading text-center text-white fw-bold mb-4 mt-5">
                Latest <span className="pup fw-bold">Projects</span>
              </h2>
              <p className="text-white fw-bold">
                Here is my latest Projects
              </p>

              <div className="row">
                {portfolio.map((project, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100 custom-card">
                      <img
                        src={project.imgUrl}
                        className="project-card-img"
                        alt={project.title}
                      />
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
                            Click Here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
