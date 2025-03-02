import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let newStr = s2;
  let commonChar = 0;
  for (let i = 0; i < s1.length; i++) {
    newStr = newStr.replace(s1[i], 1);
  }
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '1') {
      commonChar += +newStr[i];
    }
  }
  return commonChar;
}
