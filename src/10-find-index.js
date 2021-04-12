/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  // console.log(array, value);
  /* let ind = -1;
  let i = 0;
  while (ind < 0 && i < array.length) {
    if (array[i] === value) {
      ind = i;
    }
    i++;
  } */
  /* const map = new Map();
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], i);
  }
  console.log(map.get(value));
  return map.get(value); */
  // const ind = -1;
  // if (array.find((e, i) => (e === value) ? i : -1) > -1) {
  //  ind = i;
  // }

  // return ind;

  // console.log(array.find((e, index, arr) => ((e === value) ? arr.indexOf(e) : -1)));
  return Math.max.apply(null, array.map((e, index) => ((e === value) ? index : -1)));
  // return ind;
}

module.exports = findIndex;
