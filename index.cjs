var isEsm = false;
var isEsmodule = isEsm;
var isCjs = true;
var isCommonjs = isCjs;
var isBrowser = false;
var isNode =
  Object.prototype.toString.call(
    typeof process !== "undefined" ? process : 0
  ) === "[object process]";


module.exports = {
  isEsm: isEsm,
  isEsmodule: isEsmodule,
  isCjs: isCjs,
  isCommonjs: isCommonjs,
  isBrowser: isBrowser,
  isNode: isNode,
};
