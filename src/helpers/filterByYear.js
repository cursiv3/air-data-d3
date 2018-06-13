export const filterByYear = arr => {
  var years = [];
  arr.forEach(obj => {
    if (years.indexOf(obj.reportyear) === -1) {
      years.push(obj.reportyear);
    }
  });
  let returnItem = [];
  years.forEach(year => {
    let returnObj = { year: year };
    arr.forEach(obj => {
      if (obj.reportyear === year) {
        returnObj[obj.countyname] = obj.value;
      }
    });
    returnItem.push(returnObj);
  });
  return returnItem;
};
