// [-7, -5, -4, 3, 6, 8, 9]
// the largest possible values squared can either be at the start or at the end of the array. i.e -7 squared is 49 and 9 squared is 81
// we initialize two pointers at these ends.
// Get the digit that would give the largest result when squared.
// unshift the squared value of the value pointed by the pointer to a result array and move the pointer of that side inwards
function sortedSquaredArray(array) {
  let resultArr = [], left = 0, right = array.length - 1;
  while (true){
    if (array[right]*array[right] >= array[left] * array[left]){
      resultArr.unshift(array[right] * array[right]);
      right --;
    }else{
      resultArr.unshift(array[left] * array[left]);
      left ++;
    }
    // when the pointers meet, add the value being pointed to manually.
    if (left == right){
      resultArr.unshift(array[left] * array[left]);
      break;
    }
  }

  return resultArr;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([1, 2]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]));
