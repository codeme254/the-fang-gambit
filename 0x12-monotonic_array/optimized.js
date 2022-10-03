function isMonotonic(array) {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  let i;
  for (i = 2; i < array.length; i++){
    if (direction === 0){
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) return false;
  }
  return true;
}
const breaksDirection = (direction, previousInt, currentInt) => {
  let difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}
console.log(isMonotonic([10, 20, 30, 40, 50, 60, 70]));
console.log(isMonotonic([70, 60, 50, 40, 30, 15, 20, 10]));
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))
