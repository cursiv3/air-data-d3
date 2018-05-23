import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const axios = require("axios");

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
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
      obj.measureType = data[idx][10];
      obj.stateAbr = data[idx][12];
      obj.state = data[idx][13];
      obj.county = data[idx][15];
      obj.year = data[idx][16];
      obj.value = data[idx][17];
      obj.unit = data[idx][18];
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

  render() {
    var data = this.state.multnomah;

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
      let yearObj = {};
      yearArray.forEach(year => {
        let sameYear = objArray.filter(obj => obj.year === year);
        yearObj[year] = sameYear;
      });
      return yearObj;
    };

    var yearArr = findDistinctYears(data);

    return (
      <div>
        <button name="mult">Multnomah County</button>
        <button name="wash">Washington County</button>
        <button name="mari">Marion County</button>
        <button name="yam">Yamhill County</button>
        <button name="clac">Clackamas County</button>
        <table>
          <tbody>
            {data.map(obj => (
              <tr>
                <td>{obj.state}</td>
                <td>{obj.county}</td>
                <td>{obj.year}</td>
                <td>{obj.value}</td>
                <td>{obj.unitName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
