const containerWithMostWater = heights => {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;

  while (p1 < p2){
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]){
      p1++;
    }else{
      p2--;
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
console.log(containerWithMostWater([9, 80, 1, 2, 100, 9]));
