import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ background: 'rgb(8, 8, 108)' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="row d-flex align-items-stretch">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src="image/pic.jpg"
                          alt="Rima Debnath"
                          className="img-fluid about-img"
                        />

                      </div>
                    </div>

                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>
                          <span>Rima Debnath</span>
                        </p>
                        <p>
                          <span className="title-s">Job Role: </span>
                          <span>Software Developer</span>
                        </p>
                        <p>
                          <span className="title-s">Experience: </span>
                          <span>6 Months</span>
                        </p>
                        <p>
                          <span className="title-s">Address: </span>
                          <span>Kolkata,India</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    {[
                      { skill: 'PYTHON', percentage: 85 },
                      { skill: 'Java', percentage: 80 },
                      { skill: 'HTML5', percentage: 85 },
                      { skill: 'CSS3', percentage: 80 },
                      { skill: 'React', percentage: 80 },
                    ].map(({ skill, percentage }) => (
                      <div key={skill}>
                        <span>{skill}&nbsp;&nbsp;&nbsp;</span>
                        <span className="pull-right">{percentage}%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${percentage}%` }}
                            aria-valuenow={percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h1 className="about-heading">About <span className="pup">Me</span></h1>
                  <p>As an aspiring and enthusiastic individual, I find joy in both teaching and coding. My passion lies
                    in exploring new technologies and creating innovative solutions. I am a dedicated teacher, striving
                    to impart knowledge and inspire my students. In my coding journey, I enjoy the process of learning
                    and applying new concepts to build exciting projects. Beyond coding, I am an avid reader and a music
                    enthusiast, finding inspiration in the rhythm of life.
                  </p>
                  <div className="pop">
                    <p><span className="pup">Profile:</span> Software Developer</p>
                    <p><span className="pup">Domain:</span>Web Developer &amp; FullStack Developer </p>
                    <p><span className="pup">Education:</span> <span>Bachelor of Technology</span></p>
                    <p><span className="pup">Language:</span> <span>English, Hindi,Bengali</span></p>
                    <p><span className="pup">Skills:</span> <span>HTML5, CSS3, JavaScript, Java, Python, C, Sql, React, Bootstrap5 &amp; Django </span></p>
                    <p><span className="pup">Other Skills:</span> <span>Excel, GitHub, &amp; Microsoft Office</span></p>
                    <p><span className="pup">Interest:</span> <span>Traveling,Teaching</span> </p>
                  </div>
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
