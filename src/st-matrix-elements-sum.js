import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const columnLength = matrix.length;
  const rowLength = matrix[0].length;
  let summ = 0;
  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      if (matrix[column][row] !== 0) {
        summ += matrix[column][row];
      } else {
        column = columnLength;
      }
    }
  }
  return summ;
}
