// Implementation of quick sort which will be handy in the solution
// [3, 1, 6, 2, 8, 4, 9, 5]
// [3, 1, 4, 2, 5, 8, 9, 6]

const swapArrElements = (arr, idx1, idx2) => {
  if (idx1 == idx2) return;
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

const placePivot = (arr, pivotIdx = arr.length - 1) => {
  let i = 0;
  while (i < pivotIdx) {
    if (arr[pivotIdx] >= arr[i]) i++;
    else{
      swapArrElements(arr, pivotIdx, pivotIdx - 1);
      if (arr[i] < arr[pivotIdx]){
        pivotIdx--;
      }else{
        swapArrElements(arr, i, pivotIdx);
        pivotIdx--;
      }
    }
  }
  return pivotIdx;
}
console.log(placePivot([3, 1, 6, 2, 8, 4, 9, 5]));
console.log(placePivot([3, 2, 1, 5, 6, 4]));
