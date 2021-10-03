import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let newArr = [];
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  for (let i = 0; i < repeatTimes; i++) {
    if (str === null) {
      newArr.push('null');
    } else {
      newArr.push(str.valueOf());
    }
    for (let k = 0; k < additionRepeatTimes; k++) {
      if (options.addition === null) {
        newArr.push('null');
      } else if (options.addition !== undefined) {
        newArr.push(options.addition.valueOf());
      }
      options.additionSeparator
        ? newArr.push(options.additionSeparator)
        : newArr.push('|');

      if (k === additionRepeatTimes - 1) {
        newArr.pop();
      }
    }
    options.separator ? newArr.push(options.separator) : newArr.push('+');
  }
  newArr.pop();
  return newArr.join('');
}
