var isEsmodue = false;
var isCommonjs = true;
var isBrowser = false;
var isNode =
  Object.prototype.toString.call(
    typeof process !== "undefined" ? process : 0
  ) === "[object process]";


module.exports = {
  isEsmodue: isEsmodue,
  isCommonjs: isCommonjs,
  isBrowser: isBrowser,
  isNode: isNode,
};
