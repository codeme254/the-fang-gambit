function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 0; i < array.length; i++){
    if (array[i] < array[i - 1]){
      isNonDecreasing = false;
    }
    if (array[i] > array[i - 1]){
      isNonIncreasing = false;
    }
  }
  return isNonDecreasing || isNonIncreasing;
}

console.log(isMonotonic([10, 20, 30, 40, 50, 60, 70]));
console.log(isMonotonic([70, 60, 50, 40, 30, 15, 20, 10]));
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
