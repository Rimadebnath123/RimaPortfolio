import React from "react";

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    const homeSection = document.querySelector("#home");
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 70;

    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0 text-white" style={{ fontSize: '0.9rem' }}>
          Copyright &copy; 2026 by <span className="text-white fw-bold">@rimadebnath</span> | All Rights Reserved!
        </p>
        <div>
          <button onClick={handleScrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <i className="fa-solid fa-angle-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
