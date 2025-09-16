import React from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2oam5c",   // from EmailJS
        "template_j219gpi",  // from EmailJS
        e.target,            // your form
        "PWkw7pm9uGmBnHYP_"    // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="heading text-center fw-bold mb-4 mt-5">
          Contact <span className="pup fw-bold">Me</span>
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
            <form onSubmit={sendEmail} className="contact-form">
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Email Subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="8"
                  placeholder="Your Message"
                  required
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
