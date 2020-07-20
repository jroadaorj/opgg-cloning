import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import Navigation from "./components/Navigation/Navigation";
import Main from "./containers/Main/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
          <Main></Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
