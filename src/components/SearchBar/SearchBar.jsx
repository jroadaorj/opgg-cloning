import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

// const StyledForm = styled.form`
//   border-radius: 25px;
//   width: 50%;
//   background: white;
//   margin: 0% 25%;
//   display: flex;
// `;

// const StyledTextField = styled(TextField)`
//   &&& {
//     margin-left: 10px;
//     margin-right: 10px;
//     flex-basis: 90%;
//     flex-grow: 1;
//     flex-shrink: 1;
//   }

//   fieldset {
//     border-width: 0;
//   }
// `;

// const StyledButton = styled(Button)`
//   &&& {
//     margin: 10px 20px 10px 0px;
//     color: white;
//     background: #00a9ff;
//     font-size: 100%;
//   }

//   Link {
//     text-decoration: none;
//   }

//   flex-basis: 10%;
//   flex-grow: 1;
//   flex-shrink: 1;
// `;

// const getInput = () => {
//   const inputVal = document.getElementById("outlined-basic").value;

//   return inputVal;
// };

// const searchbar = () => {
//   return (
//     <StyledForm noValidate autoComplete="off">
//       <StyledTextField
//         id="outlined-basic"
//         variant="outlined"
//         placeholder="Enter a champion name"
//       />
//       <StyledButton variant="contained" onClick={getInput}>
//         <Link to="/statistics">.FF</Link>
//       </StyledButton>
//     </StyledForm>
//   );
// };

class SearchBar extends Component {
  state = { userInput: "asd" };

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
      background: #00a9ff;
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
          placeholder="Enter a champion name"
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
