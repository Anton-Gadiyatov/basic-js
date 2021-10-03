import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let isMac = true;
  const macChars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
  ];
  const str = n.toString();
  if (str.length === 17) {
    for (let i = 0; i < str.length; i++) {
      if ((i + 1) % 3 === 0 && str[i] !== '-') {
        isMac = false;
      }
      if (macChars.indexOf(str[i]) === -1) {
        isMac = false;
      }
    }
  } else {
    isMac = false;
  }

  return isMac;
}
