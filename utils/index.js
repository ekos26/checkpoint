// UTILITY FUNCTIONS

const utils = {};

utils.getInitials = (str) => {
  //your code here
  let newStr = str.split(' ');
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase()
  }
  return newStr.join('');
};

utils.generateGroups = (arr, size) => {
  //your code here
  return arr;
};

utils.throttle = (func, num) => {
  //your code here
  return func
};

module.exports = utils;
