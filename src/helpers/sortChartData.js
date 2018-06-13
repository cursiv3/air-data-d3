export const sortChartData = objArr => {
  const mergeSort = arr => {
    var len = arr.length;
    if (len < 2) return arr;
    var mid = Math.floor(len / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
    while (l < lLen && r < rLen) {
      if (left[l].year < right[r].year) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  };

  return mergeSort(objArr);
};
