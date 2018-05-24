import { filterByCounty } from "./filterByCounty";

export const filterByYear = objArray => {
  var years = [];
  objArray.forEach(obj => {
    if (years.indexOf(obj.year) === -1) {
      years.push(obj.year);
    }
  });
  var counties = filterByCounty(objArray);
  let returnObj = {};
  years.forEach(year => {
    returnObj[year] = [];
    counties.forEach(obj => {
      if (obj.year === year) {
        returnObj[year].push(obj);
      }
    });
  });
  return returnObj;
};
