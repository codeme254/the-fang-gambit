// Container with most water brute force solution
// [6, 9, 3, 4, 5, 8]
const containerWithMostWater = arr => {
  if (arr.length <= 1) return 0;

  let a, b, maxArea = 0, currentArea;
  for (a = 0; a < arr.length; a++){
    for (b = a + 1; b < arr.length; b++){
      let length = b - a;
      let height = Math.min(arr[a], arr[b]);
      currentArea = length * height;
      maxArea = Math.max(maxArea, currentArea);
    }
  }

  return maxArea;
}

console.log(containerWithMostWater([6, 9, 3, 4, 5, 8]));
console.log(containerWithMostWater([6]));
console.log(containerWithMostWater([]));
console.log(containerWithMostWater([7, 1, 2, 3, 9]));
console.log(containerWithMostWater([4, 8, 1, 2, 3, 9]));
console.log(containerWithMostWater([6, 80, 1, 2, 100, 9]));
