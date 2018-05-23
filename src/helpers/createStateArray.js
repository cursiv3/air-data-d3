export const createStateArray = data => {
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
};
