import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const StyledForm = styled.form`
  border-radius: 25px;
  width: 50%;
  background: white;
  margin: 0% 25%;
`;

const StyledTextField = styled(TextField)`
  &&& {
    width: 80%;
  }

  fieldset {
    border-width: 0;
  }
`;

const searchbar = () => {
  return (
    <StyledForm noValidate autoComplete="off">
      <StyledTextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Enter a champion name"
      />
      <div>button</div>
    </StyledForm>
  );
};

export default searchbar;
