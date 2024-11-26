import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
  <div className="container d-flex justify-content-between align-items-center">
    <p className="mb-0">
      Copyright &copy; 2024 by <span className="fw-bold">@rimadebnath</span> | All Rights Reserved!
    </p>
    <div>
      <a href="#home" className="btn btn-primary">
        <i className="fa-solid fa-angle-up"></i>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
