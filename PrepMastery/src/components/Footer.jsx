import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [onHomepage, setonHomepage] = useState(true);

  useEffect(() => {
    if (location.pathname !== "/") {
      setonHomepage(false);
    }
  }, [location]);
  return (
    <div>
      <footer className="footer footer-center p-5  text-base-content rounded bg-yello2">
        {onHomepage ? (
  <nav className="grid grid-flow-col gap-4">
    <AnchorLink href="#home" className="link link-hover">
      Home
    </AnchorLink>
    <AnchorLink href="#about" className="link link-hover">
      About us
    </AnchorLink>
    <AnchorLink href="#contact" className="link link-hover">
      Contact
    </AnchorLink>
    <AnchorLink href="#Tracks" className="link link-hover">
      Tracks
    </AnchorLink>
  </nav>
) : (
  <nav className="grid grid-flow-col gap-4">
    <Link to="/" className="link link-hover">
      Home
    </Link>
    <Link to="/#about" className="link link-hover">
      About us
    </Link>
    <Link to="/#contact" className="link link-hover">
      Contact
    </Link>
    <Link to="/#Tracks" className="link link-hover">
      Tracks
    </Link>
  </nav>
)}

        <aside>
          <p>Copyright © 2024 - All right reserved by PrepMastery Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
