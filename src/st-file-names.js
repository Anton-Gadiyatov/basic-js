import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const newArray = [];
  let repeat = true;
  let k = 1;
  for (let i = 0; i < names.length; i++) {
    k = 1;
    if (newArray[i] === undefined) {
      newArray[i] = names[i];
      for (let j = i + 1; j < names.length; j++) {
        if (names[i] === names[j]) {
          newArray[j] = `${names[i]}(${k})`;
          k++;
        }
      }
    }
  }
  while (repeat === true) {
    repeat = false;
    for (let i = 0; i < newArray.length; i++) {
      for (let j = i + 1; j < newArray.length; j++) {
        if (newArray[i] === newArray[j]) {
          newArray[j] += '(1)';
          repeat = true;
        }
      }
    }
  }

  return newArray;
}
