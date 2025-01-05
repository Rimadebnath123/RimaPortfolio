import React from "react";

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    const homeSection = document.querySelector("#home");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    // Scroll to the top with offset
    window.scrollTo({
      top: homeSection.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0">
          Copyright &copy; 2024 by <span className="fw-bold">@rimadebnath</span> | All Rights Reserved!
        </p>
        <div>
          <button onClick={handleScrollToTop} className="btn btn-primary">
            <i className="fa-solid fa-angle-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
