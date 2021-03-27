const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr, curdepth = 0, maxdepth = 0) {
    if (Array.isArray(arr)) {
      arr.forEach((arrEl) => {
        curdepth = this.calculateDepth(arrEl);

        if (curdepth > maxdepth) {
          maxdepth = curdepth;
          curdepth = 0;
        }
      });
      return maxdepth + 1;
    } else {
      return 0;
    }
  }
};
