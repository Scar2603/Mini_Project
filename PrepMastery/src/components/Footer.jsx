import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div>
    <footer className="footer footer-center p-10  text-base-content rounded bg-yello">
  <nav className="grid grid-flow-col gap-4">
    <AnchorLink href="#home" className="link link-hover">Home</AnchorLink>
    <AnchorLink href="#about" className="link link-hover">About us</AnchorLink>
    <AnchorLink href="#contact" className="link link-hover">Contact</AnchorLink>
    <AnchorLink href="#Tracks" className="link link-hover">Tracks</AnchorLink>
  </nav> 

  <aside>
    <p>Copyright © 2024 - All right reserved by PrepMastery Ltd</p>
  </aside>
    </footer>
    </div>
  )
}

export default Footer