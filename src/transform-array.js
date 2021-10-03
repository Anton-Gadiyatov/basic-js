import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
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
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  return newArray.filter((el) => el !== ' ');
}
