// The area is impacted by the smallest value of any 2 heights at any time
// We always try to increase the minimum value
// [6, 9, 3, 4, 5, 8]

const containerWithMostWater = arr => {
  if (arr.length <= 1) return 0;

  let a = 0, b = arr.length - 1, maxArea = 0, currentArea;

  while (a < b){
    let length = b - a;
    let width;
    if (arr[a] < arr[b]){
      width = arr[a];
      a++;
    }else if (arr[b] < arr[a]){
      width = arr[b];
      b--;
    }else{
      // if arr[a] and arr[b] are equal, we can proceed with any, I chose arr[b] you can still choose arr[a] and trust me it will work out
      width = arr[b];
      b--;
    }
    currentArea = length * width;
    maxArea = Math.max(maxArea, currentArea);
  }
  return maxArea;
}

console.log(containerWithMostWater([6, 9, 3, 4, 5, 8]));
console.log(containerWithMostWater([6]));
console.log(containerWithMostWater([]));
console.log(containerWithMostWater([7, 1, 2, 3, 9]));
console.log(containerWithMostWater([4, 8, 1, 2, 3, 9]));
console.log(containerWithMostWater([6, 80, 1, 2, 100, 9]));
console.log(containerWithMostWater([9, 80, 1, 2, 100, 9]));
