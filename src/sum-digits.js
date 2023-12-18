const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n.toString().split('');
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += +arr[i];
    if (res >= 10) {
      arr = res.toString().split('');
      res = 0;
      for (let j = 0; j < arr.length; j++) {
        res += +arr[j];
      }
    }
  }
  return res;
}

module.exports = {
  getSumOfDigits
};
