import { filterByCounty } from "./filterByCounty";

export const filterByYear = arr => {
  var years = [];
  arr.forEach(obj => {
    if (years.indexOf(obj.reportyear) === -1) {
      years.push(obj.reportyear);
    }
  });
  var counties = filterByCounty(arr);
  let returnObj = {};
  years.forEach(year => {
    returnObj[year] = [];
    counties.forEach(obj => {
      if (obj.reportyear === year) {
        returnObj[year].push(obj);
      }
    });
  });
  return returnObj;
};
