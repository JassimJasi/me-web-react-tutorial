import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ripan-roy-6aa744200/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Ripan-Roy" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dev.to/ripan_roy" target="_blank">
        <SiDevdotto />
      </a>
    </div>
  );
};

export default HeaderSocials;
