const largestSubstring = string => {
  if (string.length <= 1) return string.length;
  let hash = {},largestLength = 0, i = 0;
  while (i < string.length){
    if (!hash[string[i]]){
      hash[string[i]] = i;
      let temp = Object.keys(hash).length;
      if (temp > largestLength) largestLength = temp;
      i++;
    }else{
      // console.log(`${string[i]} is already available in the hash, :value ${hash[string[i]]}`);
      i = hash[string[i]] + 1;
      hash = {};
    }
  }
  return largestLength;
}

// largestSubstring("abccabb");
console.log(largestSubstring("abccabb"));
console.log(largestSubstring("cccccc"));
console.log(largestSubstring(""));
console.log(largestSubstring("abcbda"));
