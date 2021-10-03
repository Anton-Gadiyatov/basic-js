import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let newStr = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    counter = 1;
    let k = i + 1;
    while (str[i] === str[k]) {
      counter++;
      k++;
    }
    if (counter > 1) {
      newStr += `${counter}${str[i]}`;
    } else {
      newStr += str[i];
    }
    i += counter - 1;
  }
  return newStr;
}
