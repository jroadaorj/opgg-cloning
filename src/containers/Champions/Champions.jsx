import React, { Component } from "react";
import { Switch, Route, useParams } from "react-router-dom";

class App extends Component {
  getChampionName() {
    let { championName } = useParams();

    return (
      <div>
        <h3>{championName}</h3>
      </div>
    );
  }

  render() {
    return (
      <Switch>
        <Route
          path="/statistics/:championName"
          children={<this.getChampionName />}
        />
      </Switch>
    );
  }
}

export default App;
