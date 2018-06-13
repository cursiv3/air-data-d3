export const filterByCounty = dataArr => {
  let counties = dataArr.filter(obj =>
    `Washington|Clackamas|Multnomah|Marion|Yamhill`.test(obj.countyname);
  );
  let countyArr = [];
  counties.forEach(obj => {
    if (countyArr.indexOf(obj.countyname) === -1) {
      let pushObj = {};
      counties.push((pushObj[obj.countyname] = []));
    }
  });
  return counties;
};
