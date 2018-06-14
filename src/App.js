import React, { Component } from "react";
import "./App.css";
import Linechart from "./charts/Linechart";
import Areachart from "./charts/Areachart";
import Buttons from "./components/Buttons";
import { filterByYear } from "./helpers/filterByYear";
import { sortChartData } from "./helpers/sortChartData";
import LoadingChart from "./charts/LoadingChart";
import { filterByCounty } from "./helpers/filterByCounty";

const axios = require("axios");

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      areaChart: false,
      focus: null,
      isDataReceived: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://data.cdc.gov/resource/nccy-exrp.json?statename=Oregon&unitname=Percent&$limit=220000"
      )
      .then(res => {
        let counties = filterByCounty(res.data);
        let filteredData = filterByYear(counties);
        let chartData = sortChartData(filteredData);
        this.setState({ data: chartData, isDataReceived: true });
      });
  }

  onButtonClick(evt) {
    if (evt.target.id !== "do-nothing") {
      let name = evt.target.id;
      this.setState({
        areaChart: true,
        focus: name
      });
    }
  }

  modalClose() {
    this.setState({
      areaChart: false,
      focus: null
    });
  }

  render() {
    return (
      <div className="app-parent-container">
        {!this.state.isDataReceived && (
          <h1 className="data-loading-h1">Loading...</h1>
        )}
        {this.state.isDataReceived ? (
          <Linechart
            data={this.state.data}
            isDataReceived={this.state.isDataReceived}
            className="linechart-parent"
          />
        ) : (
          <LoadingChart />
        )}

        {this.state.areaChart && (
          <div
            className="area-chart-modal-container"
            onClick={evt => this.modalClose()}
          >
            <Areachart data={this.state.data} focus={this.state.focus} />
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
