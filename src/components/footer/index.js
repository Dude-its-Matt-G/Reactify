import React from "react";
import {Link} from "react-router-dom";
import "../../App";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__div--home">
        <Link to="/"><i class="fas fa-home"></i></Link>
      </div>
    </footer>
  );
};

export default Footer;
