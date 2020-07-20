import React from "react";
import { Link } from "react-router-dom";

import opgg_logo from "../../assets/images/opgg_logo_white_transparent.png";
import "./Logo.scss";

const logo = () => (
  <div className="Logo">
    <Link to="/">
      <img className="LogoImage" src={opgg_logo} alt="OP.GG" />
    </Link>
  </div>
);

export default logo;
