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
  let arr = []
  if (Array.isArray(members)) {
    members.forEach((i) => typeof i === 'string' ? arr.push(i.trim()[0].toUpperCase()) : false)
    return arr.sort().join('')
  }
  return false
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
