import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const axios = require("axios");

class App extends Component {
  constructor() {
    super();

    this.state = {
      multnomah: [],
      washington: [],
      marion: [],
      yamhill: [],
      clackamas: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://data.cdc.gov/api/views/cjae-szjv/rows.json?accessType=DOWNLOAD"
      )
      .then(res => {
        console.log(res.data);
        var filtered = this.filterResults(res.data.data);
        var stateArray = this.createStateArray(filtered);
        var stateObj = this.filterByCounty(stateArray);
        this.setState(stateObj);
      });
  }

  filterResults(data) {
    var dataWithUnits = data.filter(arr => arr[19] !== "No Units");
    return dataWithUnits.filter(arr => arr[13] === "Oregon");
  }

  createStateArray(data) {
    var returnArray = data.map((_, idx) => {
      var obj = {};
      obj.measureName = data[idx][9];
      obj.state = data[idx][13];
      obj.county = data[idx][15];
      obj.year = data[idx][16];
      obj.value = data[idx][17];
      obj.unitName = data[idx][19];
      return obj;
    });
    return returnArray;
  }

  filterByCounty(data) {
    var multnomah = data.filter(obj => obj.county === "Multnomah");
    var washington = data.filter(obj => obj.county === "Washington");
    var marion = data.filter(obj => obj.county === "Marion");
    var yamhill = data.filter(obj => obj.county === "Yamhill");
    var clackamas = data.filter(obj => obj.county === "Clackamas");
    return {
      multnomah: multnomah,
      washington: washington,
      marion: marion,
      yamhill: yamhill,
      clackamas: clackamas
    };
  }

  // =============================================================================

  render() {
    var data = this.state.multnomah;
    var data2 = this.state.marion;

    const getPercentData = objArray => {
      return objArray.filter(obj => obj.unitName === "Percent");
    };

    const getMcgData = objArray => {
      return objArray.filter(
        obj => obj.unitName === "Micograms per cubic meter"
      );
    };

    const findDistinctYears = objArray => {
      var distinctYears = [];
      objArray.map(obj => {
        if (distinctYears.indexOf(obj.year) === -1) {
          distinctYears.push(obj.year);
        }
      });
      return distinctYears;
    };

    const groupDataByYear = (objArray, yearArray) => {
      let yearObj = [];
      yearArray.forEach(year => {
        let sameYear = objArray.filter(obj => obj.year === year)[0];
        yearObj.push(sameYear);
      });
      return yearObj;
    };

    const combineCountyData = (
      stateObj,
      mcgDataFunc,
      pctDataFunc,
      distincYrsFunc,
      grpByYrFunc
    ) => {
      var returnObj = {};
      for (var key in stateObj) {
        var pctData = pctDataFunc(stateObj[key]);
        var mcgData = mcgDataFunc(stateObj[key]);
        var distinctYears = distincYrsFunc(stateObj[key]);
        var pctByYear = grpByYrFunc(pctData, distinctYears);
        var mcgByYear = grpByYrFunc(mcgData, distinctYears);

        returnObj[key] = [pctByYear, mcgByYear];
      }
      return returnObj;
    };

    const formatChartData = countyDataObj => {
      var years = dataByCounty.multnomah[0].map(val => val.year);
    };

    var dataByCounty = combineCountyData(
      this.state,
      getMcgData,
      getPercentData,
      findDistinctYears,
      groupDataByYear
    );

    return <div />;
  }
}

export default App;
