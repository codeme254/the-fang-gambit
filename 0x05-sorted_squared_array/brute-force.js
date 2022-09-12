function sortedSquaredArray(array) {
  if (array.length === 0) return [];

  let resultArr = new Array(array.length);

  for (let i = 0; i < array.length; i++){
    resultArr[i] = array[i] * array[i];
  }
  return resultArr.sort((a, b) => {
    return a - b;
  });
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([1, 2]));
console.log(sortedSquaredArray([-2, -1]));
