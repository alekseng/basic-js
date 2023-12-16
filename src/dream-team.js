const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let res = [];
  const d = members.filter((el) => typeof el === 'string');
  const arr = d.map((el) => el.trim().toUpperCase());
  const sort = arr.sort().map((el) => res.push(el.charAt(0)));
  return res.join('');
}

module.exports = {
  createDreamTeam
};
