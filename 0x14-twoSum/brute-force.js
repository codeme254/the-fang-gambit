function threeNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b)
  const finalArray = [];
  let tmpArr = [];
  let tmpPointer = 0;
  let left = 1, right = array.length - 1;
  while((tmpPointer < left && tmpPointer < right) && (left < right)){
    const remainder = targetSum - array[tmpPointer];
    const sum = array[left] + array[right];
    if (sum == remainder){
      tmpArr[0] = array[tmpPointer];
      tmpArr[1] = array[left];
      tmpArr[2] = array[right];
      finalArray.push(tmpArr);
      tmpArr = []
      left++;
    }else if(sum < remainder) left++;
    else if(sum > remainder) right--;
    if (left == right){
      tmpPointer++;
      left = tmpPointer + 1;
      right = array.length - 1;
    }
    if (tmpPointer > left || tmpPointer > right) return finalArray;
  }
  return finalArray;
}
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([1, 2, 3, 4, 8, 10, 12, 16, 18], 22));
