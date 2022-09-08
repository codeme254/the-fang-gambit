const twoSum = (arr, target) => {
  if (arr.length < 1)return undefined;
  let p1, p2;
  for (p1 = 0; p1 < arr.length; p1++){
    let numberToFind = target - arr[p1];
    for (p2 = p1 + 1; p2 < arr.length; p2++){
      if (arr[p2] === numberToFind) return [p1, p2];
    }
  }
  return undefined;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
console.log(twoSum([1, 3, 7, 9, 2], 12));
console.log(twoSum([1], 11));
console.log(twoSum([1, 3, 7, 9, 2], 25));

// Time complexity O(n ^ 2) nested loops
