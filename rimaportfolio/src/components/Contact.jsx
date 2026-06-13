import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      "service_h2oam5c",
      "template_j219gpi",
      form.current,
      { publicKey: "PWkw7pm9uGmBnHYP_" }
    )
      .then(
        (result) => {
          setIsSending(false);
          alert("Message sent successfully!");
          form.current.reset(); // clear input form fields
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="heading text-center fw-bold mb-4 mt-5 text-white">
          Contact <span style={{ color: '#ffe91e' }}>Me</span>
        </h2>
        <p className="text-center text-white fw-semibold mb-5">Have a question or want to work together? Drop a message!</p>

        <div className="row align-items-center g-5 mt-2">

          {/* Left Side: Illustration */}
          <div className="col-lg-6 contact-image-container">
            <div className="glass-card p-4 w-100 d-flex justify-content-center align-items-center">
              <img
                src="image/devimage.png"
                alt="Contact Illustration"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Right Side: Form wrapped in glass-card */}
          <div className="col-lg-6">
            <div className="glass-card contact-form-card">
              <form ref={form} onSubmit={sendEmail} className="contact-form">

                <div className="row g-3 mb-3">
                  <div className="col-md-6 text-start">
                    <label className="form-label small fw-bold text-muted">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <label className="form-label small fw-bold text-muted">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6 text-start">
                    <label className="form-label small fw-bold text-muted">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="e.g. +1234567890"
                      required
                    />
                  </div>
                  <div className="col-md-6 text-start">
                    <label className="form-label small fw-bold text-muted">Email Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="e.g. Project Inquiry"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 text-start">
                  <label className="form-label small fw-bold text-muted">Your Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Describe your project, ideas or questions here..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-premium w-100 py-3"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
