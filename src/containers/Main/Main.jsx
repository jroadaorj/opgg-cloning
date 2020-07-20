import React, { Component } from "react";
import { Route } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Logo} />
        <Route path="/" exact component={SearchBar} />
      </div>
    );
  }
}

export default App;
