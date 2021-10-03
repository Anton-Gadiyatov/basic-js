import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const columns = matrix[0].length;
  const rows = matrix.length;
  const newMatrix = [];

  for (let i = 0; i < rows; i++) {
    newMatrix[i] = new Array(columns).fill(0);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let counter = 0;
      if (i === 0) {
        if (j === 0) {
          if (matrix[i + 1][j] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i][j + 1] === true) {
            counter += 1;
          }
        } else if (j > 0 && j < columns) {
          if (matrix[i][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j + 1] === true) {
            counter += 1;
          }
        } else if (j === columns) {
          if (matrix[i][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j] === true) {
            counter += 1;
          }
        }
      } else if (i === rows - 1) {
        if (j === 0) {
          if (matrix[i - 1][j] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i][j + 1] === true) {
            counter += 1;
          }
        } else if (j > 0 && j < columns) {
          if (matrix[i - 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i][j + 1] === true) {
            counter += 1;
          }
        } else if (j === columns) {
          if (matrix[i - 1][j] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i][j - 1] === true) {
            counter += 1;
          }
        }
      } else if (i > 0 && i < rows) {
        if (j === 0) {
          if (matrix[i - 1][j] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j + 1] === true) {
            counter += 1;
          }
        } else if (j > 0 && j < columns) {
          if (matrix[i - 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i][j + 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j + 1] === true) {
            counter += 1;
          }
        } else if (j === columns) {
          if (matrix[i - 1][j] === true) {
            counter += 1;
          }
          if (matrix[i - 1][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i][j - 1] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j] === true) {
            counter += 1;
          }
          if (matrix[i + 1][j - 1] === true) {
            counter += 1;
          }
        }
      }

      newMatrix[i][j] = counter;
    }
  }
  return newMatrix;
}
