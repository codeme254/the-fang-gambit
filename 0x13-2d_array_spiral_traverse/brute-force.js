function spiralTraverse(array) {
  const resultArr = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol){
    for (let i = startCol; i <= endCol; i++){
      resultArr.push(array[startRow][i])
    }

    // we don't want to double count that value at the final column at the first row. so startRow + 1 is what we do
    for (let i = startRow + 1; i <= endRow; i++){
      resultArr.push(array[i][endCol])
    }

    // Here we are goin in reverse order, we don't want to double count the ending column
    for (let i = endCol - 1; i > startCol; i++){
      resultArr.push(endRow[i][endRow])
    }

    for (let i = startRow + 1; i <= endRow; i++){
      resultArr.push(array[i][startCol])
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return resultArr;
}
console.log(spiralTraverse([[1,  2,  3,  4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9,  8,  7],]));
