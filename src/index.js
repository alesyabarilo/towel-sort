
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const resultArray = [];

  if (matrix === undefined) return [];

  matrix.forEach( (item, index) => {
    if (index % 2 !== 0) {
        resultArray.push(...item.sort( (a, b) => b - a));
    } else {
        resultArray.push(...item);
    }
  })

  return resultArray;
}
