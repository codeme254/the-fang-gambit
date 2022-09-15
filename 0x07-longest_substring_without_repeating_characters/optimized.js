// exists and the index is before the left pointer? We don't read it as something we have seen it already, we just update interval
// exists and the index is greater than the left pointer?

const largestSubstring = string => {
  let rightPointer = 0, leftPointer = 0, hash = {}, largestSeen = 0, j = 0;

  while (rightPointer < string.length){
    if(!hash[string[rightPointer]]){
      hash[string[rightPointer]] = rightPointer;
      // console.log(hash);
    }else {
      let indexOfSeen = hash[string[rightPointer]];
      if (indexOfSeen > leftPointer){
        leftPointer = indexOfSeen + 1;
        largestSeen = Math.max(Object.keys(hash).length, largestSeen);
      }else if (indexOfSeen < leftPointer){
        hash[string[rightPointer]] = rightPointer;
      }
      // if we are here, it means the char exists
      // console.log(`char: ${string[rightPointer]} value: ${hash[string[rightPointer]]}`);
    }
    rightPointer++;
  }
  // console.log(largestSeen);
  return Math.max(Object.keys(hash).length, largestSeen);
}
console.log(largestSubstring("abccabb"));
console.log(largestSubstring("cccccc"));
console.log(largestSubstring(""));
console.log(largestSubstring("abcbda"));
console.log(largestSubstring("abcdef"));
