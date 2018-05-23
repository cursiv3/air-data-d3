export const filterResults = data => {
  var dataWithUnits = data.filter(arr => arr[19] !== "No Units");
  return dataWithUnits.filter(arr => arr[13] === "Oregon");
};
