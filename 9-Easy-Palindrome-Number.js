// const x = 121;
// const isPalindrome = function (x) {
//   if (x < 0 || (x % 10 == 0 && x != 0)) {
//     return false;
//   }
//   if (x % parseInt(x.toString()[0]) == 0) {
//     if (x.toString()[0] == 1) {
//       if ((x * 2) % 2 == 2) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   }
//   let revertedNumber = 0;
//   while (x > revertedNumber) {
//     revertedNumber = revertedNumber * 10 + (x % 10);
//     x = x / 10;
//   }
//   return parseInt(x) == parseInt(revertedNumber) || x == revertedNumber / 10;
// };
// const result = isPalindrome(x);
// console.log(result);

const x = 1001;
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == revertedNumber || x == Math.floor(revertedNumber / 10);
};

const result = isPalindrome(x);
console.log(result);
