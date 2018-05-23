import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Linechart from "./charts/Linechart";
import Areachart from "./charts/Areachart";
import Buttons from "./components/Buttons";
import { filterByYear } from "./helpers/filterByYear";
import { createStateArray } from "./helpers/createStateArray";
import { filterResults } from "./helpers/filterResults";
import { formatChartData } from "./helpers/formatChartData";

const axios = require("axios");

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      areaChart: false,
      focus: null
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://data.cdc.gov/api/views/cjae-szjv/rows.json?accessType=DOWNLOAD"
      )
      .then(res => {
        var filtered = filterResults(res.data.data);
        var stateArray = createStateArray(filtered);
        var stateObj = filterByYear(stateArray);
        this.setState(Object.assign({}, this.state, { data: stateObj }));
      })
      .then(data => {
        this.setState(formatChartData(this.state.data));
      });
  }

  onButtonClick(evt) {
    if (evt.target.id !== "do-nothing") {
      let name = evt.target.id;

      this.setState(
        Object.assign({}, this.state, {
          areaChart: true,
          focus: name
        })
      );
    }
  }

  modalClose() {
    this.setState(
      Object.assign({}, this.state, {
        areaChart: false,
        focus: null
      })
    );
  }

  render() {
    return (
      <div className="app-parent-container">
        <Linechart data={this.state.percent} />

        {this.state.areaChart && (
          <div
            className="area-chart-modal-container"
            onClick={evt => this.modalClose()}
          >
            <Areachart data={this.state.percent} focus={this.state.focus} />
          </div>
        )}

        <Buttons
          onButtonClick={this.onButtonClick}
          modalClose={this.modalClose}
        />
      </div>
    );
  }
}

export default App;
