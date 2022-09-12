// identify between the left and the right pointer which one has the leser value.
// is this pointer value less than or equal to max value on that side.
// if yes, then we update the max on that side.
// if no, then we get the water for that pointer and add it to the total.
// Move the pointer inwards
// Repeat this for the other pointer.
const trappedRainWater = heights => {
  let left = 0, right = heights.length - 1, leftMax = 0, rightMax = 0, total = 0;

  while (left < right){
    if (heights[left] <= heights[right]){
      if(heights[left] >= leftMax) leftMax = heights[left];
      else total += leftMax - heights[left];
      left ++;
    }else{
      if (heights[right] >= rightMax) rightMax = heights[right];
      else total += rightMax - heights[right];
      right --;
    }
  }
  return total;
}

console.log(trappedRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(trappedRainWater([3, 4, 3]));
console.log(trappedRainWater([]));
console.log(trappedRainWater([5]))
console.log(trappedRainWater([5, 4, 6]))
