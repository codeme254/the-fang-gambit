// [10, 20, 30, 40, 50, 60, 70]
// [70, 60, 50, 40, 30, 15, 20, 10]
function isMonotonic(array) {
  let i = 0, j = array.length - 1, tmp;
  if (array[i] > array[j]){
    //we need to observe a decrement
    while (i < j){
      if (array[j] > array[i]) return false;
      tmp = j;
      j--;
      if (array[j] < array[tmp]) return false;
    }
  }else{
    //we expect an increment
    while (i < j){
      if (array[j] < array[i]) return false;
      tmp = j;
      j--;
      if (array[j] > array[tmp]) return false;
    }
  }
  return true;
}
console.log(isMonotonic([10, 20, 30, 40, 50, 60, 70]));
console.log(isMonotonic([70, 60, 50, 40, 30, 15, 20, 10]));
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
