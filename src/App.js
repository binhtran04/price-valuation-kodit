import React, { Component } from "react";
import "./App.css";

import Grid from "@material-ui/core/Grid";

import ValuationForm from "./components/ValuationForm";
import ValuationFeedback from "./components/ValuationFeedback";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: 20 }}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <ValuationForm />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ValuationFeedback />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
