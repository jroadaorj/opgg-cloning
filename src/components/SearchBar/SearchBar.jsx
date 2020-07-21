import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = { userInput: "" };

  StyledForm = styled.form`
    border-radius: 25px;
    width: 50%;
    background: white;
    margin: 0% 25%;
    display: flex;
  `;

  StyledTextField = styled(TextField)`
    &&& {
      margin-left: 10px;
      margin-right: 10px;
      flex-basis: 90%;
      flex-grow: 1;
      flex-shrink: 1;
    }

    fieldset {
      border-width: 0;
    }
  `;

  StyledButton = styled(Button)`
    &&& {
      margin: 10px 20px 10px 0px;
      color: white;
      background: #ced2de;
      font-size: 100%;
    }

    Link {
      text-decoration: none;
    }

    flex-basis: 10%;
    flex-grow: 1;
    flex-shrink: 1;
  `;

  render() {
    return (
      <this.StyledForm noValidate autoComplete="off">
        <this.StyledTextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Search by champion name"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        />
        <this.StyledButton variant="contained">
          <Link to={"/statistics/" + this.state.userInput.toLowerCase()}>
            .FF
          </Link>
        </this.StyledButton>
      </this.StyledForm>
    );
  }
}

export default SearchBar;
