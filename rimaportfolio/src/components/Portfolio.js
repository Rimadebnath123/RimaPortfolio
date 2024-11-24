import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2>Portfolio</h2>
        <p>Here are some of my works:</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">Description of project 1.</p>
              </div>
            </div>
          </div>
          {/* Add more projects */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
