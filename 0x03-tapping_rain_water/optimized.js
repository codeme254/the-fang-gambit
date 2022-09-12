// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

const trappedRainWater = heightsArr => {
  if (heightsArr.length <= 1) return 0;
  let p1, p2, total = 0, maxLeft = 0, maxRight = 0, currentWater = 0;
  p1 = 0;
  p2 = heightsArr.length - 1;

  while (p1 != p2){
    if (heightsArr[p1] <= heightsArr[p2]){
      if (heightsArr[p1] >= maxLeft) maxLeft = heightsArr[p1];
      else currentWater = maxLeft - heightsArr[p1];
      p1++;
    }else{
      if (heightsArr[p2] >= maxRight) maxRight = heightsArr[p2];
      else currentWater = maxRight - heightsArr[p2];
      p2--;
    }
    if (currentWater >= 0) total += currentWater;
    currentWater = 0;
  }
  return total;
}

console.log(trappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(trappedRainWater([3, 4, 3]));
console.log(trappedRainWater([]));
console.log(trappedRainWater([5]))
console.log(trappedRainWater([5, 4, 6]))
