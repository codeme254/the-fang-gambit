// Optimization of the two sum problem with a hash map
// twoSum([1, 3, 7, 9, 2], 11)
// The key is the number to find and the value is the index of the number that yielded this key.
// {10: 0, 8: 1, 4 : 2, 2 : 3, }
// {10: 1, 8: 3, 4: 7, 2: 9}
const twoSum = (nums, target) => {
  if (nums.length <= 1) return undefined;
  let hash = {};
  for (let i = 0; i < nums.length; i++){
    if (hash[nums[i]] >= 0){
      return [hash[nums[i]], i];
    }
     else {
      const numberToFind = target - nums[i];
      hash[numberToFind] = i;
    }
  }

  return null;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
console.log(twoSum([1, 3, 7, 9, 2], 16));
console.log(twoSum([1, 3, 7, 9, 2], 110));
console.log(twoSum([1], 11));
console.log(twoSum([1, 3], 4));
