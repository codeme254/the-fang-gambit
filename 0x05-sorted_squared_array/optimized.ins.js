function sortedSquaredArray(array) {
  let sortedSquares = new Array(array.length);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--){
    let smallerValue = array[smallerValueIdx];
    let largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)){
      sortedSquares[i] = smallerValue * smallerValue;
      smallerValueIdx++;
    }else{
      sortedSquares[i] = largerValue * largerValue;
      largerValueIdx --;
    }
  }
  return sortedSquares;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([1, 2]));
console.log(sortedSquaredArray([-2, -1]));
console.log(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]));
