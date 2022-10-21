// 121
// to get the right most 1, we do 121 mod 10
// to get the left most 1 we do 121 / 100
// to chop off the right most 1, we do 121 mod 10
// to chop off the left most 1, we do 121 / 100

const isPalindrome = x => {
  if(x < 0) return false;
  // getting the divider
  // 121 is 100, 1221 is 1000, 12221 is 10000 and so on
  let divider = 1;
  while (x >= divider*10) divider *= 10

  while (x){
    // getting the left most digit
    left = parseInt(x/divider);
    // getting the right most digit
    right = x % 10;
    if(left !== right) return false;
    // chopping the right most digit
    x = x%divider;
    // chopping off the left most digit
    x = parseInt(x/10)
    // removing the last two zeros of the divider
    divider /= 100;
  }
  return true;
}
console.log(isPalindrome(1000021));
console.log(isPalindrome(121))
console.log(isPalindrome(222));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(010));
