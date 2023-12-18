const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (date instanceof Date && Object.keys(date).length === 0) {
    const dateMonth = new Date(date).getMonth();
    if (dateMonth >= 2 && dateMonth <= 4) {
      return 'spring';
    } else if (dateMonth >= 5 && dateMonth <= 7) {
      return 'summer';
    } else if (dateMonth >= 8 && dateMonth <= 10) {
      return 'autumn';
    } else if (dateMonth === 11 || dateMonth === 1 || dateMonth === 0) {
      return 'winter';
    }
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
