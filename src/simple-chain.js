const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  res: '',
  separator: '~~',

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(`( ${value} )`));
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || !Number(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.res = `${this.chain.join(this.separator)}`;
    this.chain = [];
    return this.res;
  }
};

module.exports = {
  chainMaker
};
