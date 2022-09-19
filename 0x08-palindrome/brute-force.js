// brute force solution for palindrome

const transformString = string => {
  // this function removes all non-alphanumeric characters is a string, eg a comma, space e.t.c
  string = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return string;
}

const isValidPalindrome = string => {
  string = transformString(string);
  if (string.length <= 1) return true;
  let leftPointer = 0, rightPointer = string.length - 1;

  while (leftPointer < rightPointer){
    if (string[leftPointer] !== string[rightPointer]) return false;
    leftPointer ++;
    rightPointer --;
  }
  return true;
}
console.log(isValidPalindrome("A man, a plan, a canal: Panama"));
console.log(isValidPalindrome(""));
console.log(isValidPalindrome("aabaa"));
console.log(isValidPalindrome("aabbaa"));
console.log(isValidPalindrome("race a car"));
