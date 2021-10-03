import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  temporalArr: [],
  chain: '',
  getLength() {
    return this.temporalArr.length;
  },
  addLink(value) {
    this.temporalArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      this.temporalArr[position - 1] === 'undefined' ||
      Number.isNaN(position - 1)
    ) {
      this.temporalArr = [];
      throw new Error();
    } else {
      this.temporalArr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.temporalArr.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.temporalArr.join('~~');
    this.temporalArr = [];
    return this.chain;
  }
};
