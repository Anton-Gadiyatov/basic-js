const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  newName = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((m) => {
    if (typeof m === 'string') {
      m = m.trim().toUpperCase();
      newName.push(m.slice(0, 1));
    }
  });
  newName.sort();
  return newName.join('');
};
