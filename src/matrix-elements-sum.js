const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;

  for (let row = 0; row < matrix[0].length; row += 1) {
    for (let col = 0; col < matrix.length; col += 1) {
      if (matrix[col][row] === 0) {
        break;
      } else {
        res += matrix[col][row];
      }
    }
  }

  return res;
}

module.exports = {
  getMatrixElementsSum
};
