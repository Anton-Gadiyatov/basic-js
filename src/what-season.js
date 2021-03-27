const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if ((isNaN(Date.parse(date)) && date instanceof Date) || date == null) {
    return 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) === '[object Date]') {
    if (date.getMonth() >= 0 && date.getMonth() < 2) {
      return 'winter';
    }
    if (date.getMonth() >= 2 && date.getMonth() < 5) {
      return 'spring';
    }
    if (date.getMonth() >= 5 && date.getMonth() < 8) {
      return 'summer';
    }
    if (date.getMonth() >= 8 && date.getMonth() < 11) {
      return 'autumn';
    }
    if (date.getMonth() === 11) {
      return 'winter';
    }
  } else {
    throw new Error();
  }
};
