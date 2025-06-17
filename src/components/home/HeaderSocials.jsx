import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Virenrangani"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/viren-rangani-9182aa265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.instagram.com/prince_of_rangani_31?igsh=YnFlazM3Zzljajln"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />{" "}
      </a>

      <a
        href="tel:+91-8734823605"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaPhone />
      </a>

      <a href="mailto:virenrangani7@gmail.com" className="home__social-link">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default HeaderSocials;
