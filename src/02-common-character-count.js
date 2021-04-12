/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  // console.log(s1, s2);
  const a1 = s1.split('').sort();
  const a2 = s2.split('').sort();
  let comchar = 0;
  for (let i = 0; i < a1.length; i++) {
    if (a2.length > 0) {
      if (a2.indexOf(a1[i]) >= 0) {
        comchar++;
        a2.splice(a2.indexOf(a1[i]), 1);
      }
    }
  }
  /* do {
    if (a1[i] === a2[i]) {
      comchar++;
      i++;
    } else {
      // com = false;
      if (a2.length > i + 1) {
        a2.splice(i, 1);
      } else {
        com = false;
      }
    }
    i++;
  } while (com && i < len); */
  // const s = a1.join('') + a2.join('');
  // const a = Array.from(new Set(s.split('')));
  // console.log(s);
  // console.log(s.length);
  // console.log(a);
  // console.log(a.length);
  // return s.length - a.length;
  // console.log(comchar);
  return comchar;
}

module.exports = getCommonCharacterCount;
