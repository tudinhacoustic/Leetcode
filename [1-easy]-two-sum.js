const arr = [3, 2, 3];
const target = 6;
const twoSum = function (nums, targetNumber) {
  const maxLoop = nums.length - 1;
  for (let index = 0; index < maxLoop; index += 1) {
    for (let index2 = index + 1; index2 <= maxLoop; index2 += 1) {
      if (arr[index] + arr[index2] == target) {
        return [index, index2];
      }
    }
  }
};
const result = twoSum(arr, target);
console.log(result);
