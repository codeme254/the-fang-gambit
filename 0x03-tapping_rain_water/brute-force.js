// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
// @arr : array of heights
const trappedRainWater = arr => {
  if (arr.length <= 1) return 0;
  let total = 0, maxLeft = 0, maxRight = 0, currentWater = 0;

  for (let i = 0; i < arr.length; i++){
    maxLeft = 0, maxRight = 0, currentWater = 0;
    // This loop gets the maximum to the left
    for (let j = 0; j < i; j++){
      if (arr[j] > maxLeft) maxLeft = arr[j];
    }

    // this loops gets the maximum to the right.
    for (let k = i + 1; k < arr.length; k++){
      if (arr[k] > maxRight) maxRight = arr[k];
    }
    currentWater = Math.min(maxLeft, maxRight) - arr[i];
    // We need to ignore negative value for currentWater
    if (currentWater >= 0) total += currentWater;
  }
  return total;
}
console.log(trappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(trappedRainWater([3, 4, 3]));
console.log(trappedRainWater([]));
console.log(trappedRainWater([5]))
console.log(trappedRainWater([5, 4, 6]))
