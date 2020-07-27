export const isEsmodue = true;
export const isCommonjs = false;
export const isBrowser = false;
export const isNode =
  Object.prototype.toString.call(
    typeof process !== "undefined" ? process : 0
  ) === "[object process]";
