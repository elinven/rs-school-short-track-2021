/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new Error('Not implemented');
  /* console.log(domains);
  const dname = [''];
  const dlen = [0];
  // const count = 0;
  for (let i = 0; i < domains.length; i++) {
    console.log(domains[i]);
    let dend = false;
    let j = 0;
    nextdomain
    do {
      if (domains.slice(domains[i].lastIndexOf('.')) > -1) {
        dname.push(dname[j] + domains[i].slice(domains[i].lastIndexOf('.')));
        dlen.push(1);
        j++;
        domains[i].replace(domains[i].lastIndexOf('.'), '');
        console.log(domains[i]);
        console.log(dname[j]);
        dend = true;
      } else {
        if (domains[i] !== '') {
          dname.push(dname[j] + domains[i].slice(domains[i].lastIndexOf('.')));
          dlen.push(1);
        }
        dend = true;
      }
    } while (!dend);
  }

  return dname; */
}

module.exports = getDNSStats;
