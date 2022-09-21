const swap = (arr, idx1, idx2) => {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
function moveElementToEnd(array, toMove) {
  let p1 = 0, p2 = array.length - 1;
  while (p1 < p2){
    if (array[p1] === toMove){
      while (array[p2] === toMove){
        p2--;
      }
      // console.log(`swapping ${array[p1]}: ${p1} with ${array[p2]}: ${p2}:::::p1: ${p1}, p2: ${p2}`);
      if (p1 < p2){
        swap(array, p1, p2);
        // console.log(array);
        p2--;
      }
    }
    p1++;
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log(moveElementToEnd([2, 1, 2, 2, 2, 2, 4, 2], 2));
console.log(moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5));
