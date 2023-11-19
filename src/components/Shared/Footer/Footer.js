import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="content-footer">
        <div>
          © 2023 Bundui -{" "}
          <a href="https://bundui.io/" target="_blank">
            Bundui.io
          </a>
        </div>
        <div>
          <nav className="nav gap-4">
            <a href="#" className="nav-link">
              Licenses
            </a>
            <a href="#" className="nav-link">
              Change Log
            </a>
            <a href="#" className="nav-link">
              Get Help
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
