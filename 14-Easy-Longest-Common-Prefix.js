const strs = ["flight", "flow", "flower"];
const longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }
  let p = strs[0];
  for (let i = 1; i < strs.length; i += 1) {
    while (strs[i].indexOf(p) != 0) {
      p = p.substring(0, p.length - 1);
      if (p == "") {
        return "";
      }
    }
  }
  return p;
};
const result = longestCommonPrefix(strs);
console.log(result);
