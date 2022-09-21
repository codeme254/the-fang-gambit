function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a-b);
  arrayTwo.sort((a,b) => a-b);
  let p1 = 0, p2 = 0, currentDifference;
  let currentMinimumClosestToZero = Number.MAX_VALUE;
  let currentPair = [];

  // whenever arrayTwo[p2] > arrayOne[p1], we increment p1
  // i.e making p1 bigger to bring about the smallest difference
  // whenever arrayOne[p1] > arrayTwo[p2] we increment p2
  // i.e, looking for the biggest value in arrayTwo[p2] to yield the smallest value with arrayOne[p1]

  while (p1 < arrayOne.length && p2 < arrayTwo.length){
    if (arrayOne[p1] === arrayTwo[p2]) return [arrayOne[p1], arrayTwo[p2]]

    let digit1 = arrayOne[p1];
    let digit2 = arrayTwo[p2];

    if (digit1 > digit2){
      p2++;
    }else{
      p1++;
    }

    currentDifference = Math.abs(digit1 - digit2);
    if (currentDifference < currentMinimumClosestToZero){
      currentMinimumClosestToZero = currentDifference;
      currentPair = [digit1, digit2];
    }
  }

  return currentPair;
}
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
console.log(smallestDifference([10, 1000], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]));
