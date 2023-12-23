const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrChar = str.split('');
  let res = [];
  let count = 1;

  for (let i = 0; i < arrChar.length; i += 1) {
    if (arrChar[i] !== arrChar[i + 1]) {
      if (count > 1) {
        res.push(count);
      }
      count = 1;
      res.push(arrChar[i]);
    } else if (arrChar[i] === arrChar[i + 1]) {
      count += 1;
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
