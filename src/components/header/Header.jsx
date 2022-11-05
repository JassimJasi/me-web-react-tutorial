import React from "react";
import "./header.css";

import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div class="curved-header">
        {/* <div class="logo">
          <a href="">Logo</a>
        </div> */}

        <div className="container header__container">
          <CTA />
          <div className="headerContent">
            <h5>Hello I'm</h5>
            <h1>Abdulla Jaseem</h1>
            <h5 className="text-light">Mern Stack Developer</h5>
          </div>
          <HeaderSocials />

          {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
