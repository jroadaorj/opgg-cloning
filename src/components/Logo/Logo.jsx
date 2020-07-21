import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import opgg_logo from "../../assets/images/15ff_logo_white_transparent.png";

const logo = () => {
  const Logo = styled.div`
    padding: 5% 0%;
  `;

  const LogoImage = styled.img`
    width: 20%;
    min-width: 200px;
  `;

  return (
    <Logo>
      <Link to="/">
        <LogoImage src={opgg_logo} alt="OP.GG" />
      </Link>
    </Logo>
  );
};

export default logo;
