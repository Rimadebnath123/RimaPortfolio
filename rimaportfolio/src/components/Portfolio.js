import React, { useEffect, useState } from 'react';

export const Portfolio = () => {
  // State to store the Portfolio array
  const [portfolio, setPortfolio] = useState([]);

  // Simulate fetching the project data (you can replace this with an actual API call)
  useEffect(() => {
    const fetchPortfolio = () => {
      const projectData = [
        { title: 'Business Startup', description: 'Design & Development', imgUrl: 'assets/img/project-img1.png' },
        { title: 'E-commerce Platform', description: 'Full Stack Development', imgUrl: 'assets/img/project-img2.png' },
        { title: 'Mobile App Design', description: 'UI/UX Design', imgUrl: 'assets/img/project-img3.png' },
        { title: 'Corporate Website', description: 'Frontend Development', imgUrl: 'assets/img/project-img1.png' },
        { title: 'Project Management System', description: 'Backend Development', imgUrl: 'assets/img/project-img2.png' },
        { title: 'Real Estate Platform', description: 'Full Stack Development', imgUrl: 'assets/img/project-img3.png' },
      ];
      setPortfolio(projectData);
    };

    fetchPortfolio();
  }, []);

  return (
    <section className="project" id="Portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="animate__animated animate__fadeIn">
              <h2 className="text-white">Portfolio</h2>
              <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

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
                        <div className="card">
                          <img src={project.imgUrl} className="card-img-top" alt={project.title} />
                          <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
