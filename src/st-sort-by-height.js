import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let x = 0;
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== -1) {
      for (let k = i; k < newArr.length; k++) {
        if (arr[k + 1] !== -1 && newArr[k + 1] < newArr[i]) {
          x = newArr[k + 1];
          newArr[k + 1] = newArr[i];
          newArr[i] = x;
        }
      }
    }
  }
  return newArr;
}
