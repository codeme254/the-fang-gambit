function isValidSubsequence(array, sequence){
  if (array.length < sequence.length) return false

  let p1, p2 = 0;

  for (p1 = 0; p1 < array.length; p1++){
    if (array[p1] === sequence[p2]) p2++;
  }
  // check if p2 finished iterating and return true or false
  if (p2 === sequence.length) return true;
  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
