import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import opgg_logo from "../../assets/images/opgg_logo_white_transparent.png";

const navigation = () => {
  const NavigationDiv = styled.div`
    background-color: #232f46;
  `;

  const StyledDiv = styled.div`
    background-color: #5383e8;
    padding: 12px 17px;
    text-align: left;
    display: block;
    width: 65px;
  `;

  const StyledImg = styled.img`
    width: 65px;
  `;

  return (
    <NavigationDiv>
      <StyledDiv>
        <Link to="/">
          <StyledImg src={opgg_logo} alt="OP.GG" />
        </Link>
      </StyledDiv>
    </NavigationDiv>
  );
};

export default navigation;
