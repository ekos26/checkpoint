// UTILITY FUNCTIONS

const utils = {};

utils.getInitials = (str) => {
  //your code here
  let newStr = str[0].toUpperCase() + str.slice(1)
  return newStr
};

utils.generateGroups = () => {
  //your code here
};

utils.throttle = () => {
  //your code here
};

module.exports = utils;
