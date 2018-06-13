export const formatChartData = state => {
  console.log(state);
  let chartData = {
    percent: [],
    microgram: []
  };
  for (var key in state) {
    var pctData = {};
    var mcgData = {};
    pctData.year = key;
    mcgData.year = key;
    state[key].forEach(obj => {
      if (obj.unitName === "Percent") {
        pctData[obj.county] = obj.value;
      } else {
        mcgData[obj.county] = obj.value;
      }
    });
    chartData.percent.push(pctData);
    chartData.microgram.push(mcgData);
  }
  return chartData;
};
