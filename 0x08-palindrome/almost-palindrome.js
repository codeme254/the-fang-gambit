// given a string, determine if it is almost a palindrome.
// A string is almost a palindrome if it becomes a palindrome by removing 1 letter.
// Consider only alphanumeric characters and ignre case sensitivity.

// A palindrome is also an almost palindrome.

// "raceacar" : true
// "abccdba" : true
// "abcdefdba" : false
// "" or "a" : true
// "ab" : true

const buildString = (string, index) => {
  // this function builds a string excluding a character
  let finalStr = "";
  for (let i = 0; i < string.length; i++){
    if (i === index) continue
    else finalStr += string[i];
  }
  return finalStr;
}

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

const almostPalindrome = string => {
  string = transformString(string);
  if (string.length <= 2 || isValidPalindrome(string)) return true;

  let leftPointer = 0, rightPointer = string.length - 1;

  while (leftPointer <= rightPointer){
    if (string[leftPointer] !== string[rightPointer]){
      let str1 = buildString(string, leftPointer);
      let str2 = buildString(string, rightPointer);
      if (isValidPalindrome(str1) || isValidPalindrome(str2)) return true;
      return false;
    }
    leftPointer ++, rightPointer --;
  }
}

console.log(almostPalindrome("race a car"));
console.log(almostPalindrome("abccdba"));
console.log(almostPalindrome("abcba"));
console.log(almostPalindrome("abcjvba"));
