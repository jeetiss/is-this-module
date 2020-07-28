export const isEsm = true;
export const isEsmodule = isEsm;
export const isCjs = false;
export const isCommonjs = isCjs;
export const isBrowser = false;
export const isNode =
  Object.prototype.toString.call(
    typeof process !== "undefined" ? process : 0
  ) === "[object process]";
