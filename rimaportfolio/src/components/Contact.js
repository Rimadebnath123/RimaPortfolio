import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="heading text-center mb-4">
          Contact <span className="pup">Me</span>
        </h2>
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="image-wrapper">
              <img
                src="image/devimage.png"
                alt="Contact Illustration"
                className="img-fluid contact-image"
              />
              <div className="graphic-overlay"></div>
            </div>
          </div>
          {/* Right Side Form */}
          <div className="col-lg-6">
            <form className="contact-form">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
