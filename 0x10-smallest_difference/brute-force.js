function smallestDifference(arrayOne, arrayTwo) {
  let currentMinimumClosestToZero = Number.MAX_VALUE;
  let currentPair = [];

  for (let i = 0; i < arrayOne.length; i++){
    for (let j = 0; j < arrayTwo.length; j++){
      let currentDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (currentDifference < currentMinimumClosestToZero){
        currentPair[0] = arrayOne[i];
        currentPair[1] = arrayTwo[j];
        currentMinimumClosestToZero = currentDifference;
      }
    }
  }
  return currentPair;
}
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
