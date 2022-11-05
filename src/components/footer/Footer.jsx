import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jaseem
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/IDxItachi">
          <FiTwitter />
        </a>
        <a href="https://www.instagram.com/i_am_ripan/">
          <FaInstagram />
        </a>
        <a href="https://github.com/Ripan-Roy">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ripan. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
