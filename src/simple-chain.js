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
      this.temporalArr.length < position ||
      typeof position !== 'number' ||
      position < 1
    ) {
      this.temporalArr = [];
      throw new Error("You can't remove incorrect link!");
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
  },
};
