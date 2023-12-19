const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }

  let arr = [names[0]];
  let count = 1;

  for (let i = 0; i < names.length; i += 1) {
    for (let j = 0; j < names[j].length; j += 1) {
      if (arr[j] == names[i]) {
        arr.push(`${names[i]}(${count})`);
        count += 1;
      } else {
        arr.push(names[i]);
        count = 1;
      }
    };
  };

  arr.splice(1, 1);
  let res = new Set(arr);
  return Array.from(res);
}

module.exports = {
  renameFiles
};
