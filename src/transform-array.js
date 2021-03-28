const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let newArray = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-next') {
        newArray.push(' ');
        i++;
      } else if (arr[i] == '--discard-prev') {
        newArray.pop();
      } else if (arr[i] == '--double-next' && i != arr.length - 1) {
        newArray.push(arr[i + 1]);
      } else if (arr[i] == '--double-next' && i === arr.length - 1) {
      } else if (arr[i] == '--double-prev' && i != 0) {
        newArray.push(newArray[newArray.length - 1]);
      } else if (arr[i] == '--double-prev' && i === 0) {
      } else {
        newArray.push(arr[i]);
      }
    }
  } else {
    throw new Error();
  }
  return newArray.filter((el) => el !== ' ');
};
