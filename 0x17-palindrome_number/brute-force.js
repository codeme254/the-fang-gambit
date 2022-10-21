// the brute force solution for palindrome integer
// Here, I converted the integer to string then applied two pointers on it.

const isPalindrome = x => {
  x = x.toString();
  let startPointer = 0;
  let endPointer = x.length - 1;

  while (startPointer <= endPointer){
    if(x[startPointer] !== x[endPointer]) return false;
    startPointer++;
    endPointer--;
  }
  return true;
}
console.log(isPalindrome(121))
console.log(isPalindrome(222));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(010));
