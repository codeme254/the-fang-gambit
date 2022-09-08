const twoSum = (nums, target) => {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++){
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) return [currentMapVal, p];
    else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
console.log(twoSum([1, 3, 7, 9, 2], 16));
console.log(twoSum([1, 3, 7, 9, 2], 110));
console.log(twoSum([1], 11));
console.log(twoSum([1, 3], 4));
