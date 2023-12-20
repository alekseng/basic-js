const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let workArray = JSON.parse(JSON.stringify(arr));
  let nums = [];
  let ind = 0;

  for (let i = 0; i < workArray.length; i += 1) {
    if (ind < workArray.length) {
      workArray.splice(ind, 1);
      nums.push(+workArray.join(''));
      ind += 1;
      workArray = JSON.parse(JSON.stringify(arr));
    } else {
      return;
    }
  }
  return Math.max(...nums);
}

module.exports = {
  deleteDigit
};
