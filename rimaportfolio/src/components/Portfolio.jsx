import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const projectData = [
      {
        title: 'Shopit App',
        category: 'fullstack',
        description: 'Fullstack e-commerce platform using Django and React. A complete shopping application.',
        imgUrl: 'image/shop.jpg',
        link: 'https://myshopit-app-dv5l.onrender.com',
      },
      {
        title: 'Myntra Clone',
        category: 'frontend',
        description: 'A fully responsive web application clone for a seamless online shopping experience.',
        imgUrl: 'image/myntra.jpg',
        link: 'https://exquisite-puppy-a18e18.netlify.app/',
      },
      {
        title: 'Food Delivery Web',
        category: 'frontend',
        description: 'An online food delivery service website designed with intuitive food booking UI.',
        imgUrl: 'image/food.jpg',
        link: 'https://rimadebnath123.github.io/Meal/',
      },
      {
        title: 'Marketix Digital',
        category: 'frontend',
        description: 'A professional and clean digital marketing agency landing website with custom modules.',
        imgUrl: 'image/MD.webp',
        link: 'https://marketix-digital-side.netlify.app',
      },
      {
        title: 'Text Analyzer App',
        category: 'frontend',
        description: 'A responsive utility web application designed for comprehensive text processing and analysis.',
        imgUrl: 'image/text.png',
        link: 'https://rimadebnath123.github.io/firstapp/',
      },
      {
        title: 'Employee Portal API',
        category: 'fullstack',
        description: 'Fullstack CRUD portal built using Django. Leverages secure token-based authentication.',
        imgUrl: 'image/emp.webp',
        link: 'https://employee-07vx.onrender.com',
      },
    ];
    setPortfolio(projectData);

    // Initialize ScrollReveal safely
    try {
      ScrollReveal().reveal('.project-card-wrapper', {
        distance: '40px',
        duration: 1200,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 150,
        reset: false, // Set to false to avoid repeated popping on every page scroll
      });
    } catch (e) {
      console.warn("ScrollReveal error: ", e);
    }
  }, []);

  const filteredProjects = activeTab === 'all' 
    ? portfolio 
    : portfolio.filter(p => p.category === activeTab);

  return (
    <section 
      className="project" 
      id="Portfolio"
      style={{
        background: 'url("image/project back.jpeg") no-repeat center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="heading text-center fw-bold mb-4 text-white" style={{ marginTop: '70px' }}>
              Latest <span style={{ color: '#ffe91e' }}>Projects</span>
            </h1>
            <p className="fw-semibold mb-5" style={{ color: '#ffffff' }}>Explore my latest work across frontend and fullstack roles</p>

            {/* Filter Navigation */}
            <div className="d-flex justify-content-center mb-5">
              <div className="portfolio-pills">
                <button 
                  className={`nav-link border-0 ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All
                </button>
                <button 
                  className={`nav-link border-0 ${activeTab === 'frontend' ? 'active' : ''}`}
                  onClick={() => setActiveTab('frontend')}
                >
                  Frontend
                </button>
                <button 
                  className={`nav-link border-0 ${activeTab === 'fullstack' ? 'active' : ''}`}
                  onClick={() => setActiveTab('fullstack')}
                >
                  Fullstack
                </button>
              </div>
            </div>

            {/* Project Cards Grid */}
            <div className="row g-4">
              {filteredProjects.map((project, index) => (
                <div className="col-md-4 col-sm-6 project-card-wrapper" key={index}>
                  <div className="glass-card project-card">
                    <div className="project-img-wrapper">
                      <img src={project.imgUrl} alt={project.title} />
                      <div className="project-overlay">
                        <span className="badge bg-dark border border-secondary text-capitalize">{project.category}</span>
                      </div>
                    </div>
                    <div className="project-body d-flex flex-column text-start">
                      <h5>{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <div className="mt-auto pt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-premium w-100"
                        >
                          View Project <i className="fa-solid fa-arrow-up-right-from-square ms-1" style={{ fontSize: '0.85rem' }}></i>
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
    </section>
  );
};

export default Portfolio;
