function moveElementToEnd(array, toMove) {
  let i = 0, j = array.length - 1;

  while (i < j){
    while (array[j] === toMove && i < j){
      j--;
    }

    if (array[i] === toMove){
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    i++;
  }
  return array;
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log(moveElementToEnd([2, 1, 2, 2, 2, 2, 4, 2], 2));
console.log(moveElementToEnd([5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12], 5));
