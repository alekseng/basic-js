const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const tr = [
    '--discard-prev',
    '--double-prev',
    '--double-next',
    '--discard-next'
  ];
  if (Array.isArray(arr) === false
    ||
    Array.isArray(arr) === undefined
    ||
    Array.isArray(arr) === null) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return [];
  }

  const array = structuredClone(arr);
  const res = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === tr[0]) {
      if (array[i - 1]) {
        array.splice(i - 1, 1);
        i -= 1;
      }
    }
    else if (array[i] === tr[1]) {
      if (array[i - 1]) {
        array[i] = array[i - 1];
        i -= 1;
      }
    }
    else if (array[i] === tr[2]) {
      if (array[i + 2] === tr[0]) {
      } else if (array[i + 1]) {
        array[i] = array[i + 1];
        i -= 1;
      } else {
        array.splice(i, 1);
      }
    }
    else if (array[i] === tr[3]) {
      if (array[i + 1]) {
        array.splice(i + 1, 1);
        i += 1;
      } else {
        array.splice(i, 1);
      }
    }
    else {
      res.push(array[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};
