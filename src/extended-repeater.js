const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {

  let string = String(str);
  const arr = [];
  let addition = String(options.addition);

  isOptionRepeatTime = options.repeatTimes ? options.repeatTimes : 1;
  isOptionSeparator = options.separator ? options.separator : '+';
  isOptionAddition = addition ? addition : '';
  options.addition === undefined ? isOptionAddition = '' : isOptionAddition;
  isOptionAdditionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  isOptionAdditionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

  for (let i = 0; i < isOptionRepeatTime; i += 1) {
    arr.push(string);
    for (let j = 0; j < isOptionAdditionRepeatTimes; j += 1) {
      if (isOptionAddition) {
        arr.push(isOptionAddition);
      }
      if (isOptionAdditionSeparator && j < isOptionAdditionRepeatTimes - 1) {
        arr.push(isOptionAdditionSeparator);
      }
    }
    if (isOptionSeparator && i < isOptionRepeatTime - 1) {
      arr.push(isOptionSeparator);
    }
  }
  return arr.join('');
}

module.exports = {
  repeater
};
