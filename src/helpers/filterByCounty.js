export const filterByCounty = dataArr => {
  let counties = dataArr.filter(obj =>
    /Washington|Clackamas|Multnomah|Marion|Yamhill/.test(obj.countyname)
  );
  return counties;
};
