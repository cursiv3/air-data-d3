export const filterByCounty = data => {
  var counties = data.filter(obj =>
    /Multnomah|Washington|Marion|Yamhill|Clackamas/.test(obj.county)
  );
  return counties;
};
