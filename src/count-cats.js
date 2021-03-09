const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach((el) => {
    let a = el.indexOf('^^');
    while (a !== -1) {
      cats = cats + 1;
      a = el.indexOf('^^', a + 1);
    }
  });
  return cats;
};
