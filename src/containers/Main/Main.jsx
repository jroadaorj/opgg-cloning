import React, { Component } from "react";

import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <Logo></Logo>
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;
