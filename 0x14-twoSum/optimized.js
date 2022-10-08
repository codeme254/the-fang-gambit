function threeNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b)
  let tripletsArr = [];
let i = 0;
  while(i < array.length - 2){
    let left = i + 1, right = array.length - 1;
    while(left < right){
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum == targetSum){
        tripletsArr.push([array[i], array[left], array[right]])
        left++;
        right--;
      }else if (currentSum < targetSum) left++;
      else if (currentSum > targetSum) right--;
    }
    i++;
  }
  return tripletsArr;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([1, 2, 3, 4, 8, 10, 12, 16, 18], 22));
