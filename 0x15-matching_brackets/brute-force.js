const matchingBrackets = string => {
  if (string === "") return true

  const lookUp = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  const stack = []
  for (let i = 0; i < string.length; i++){
    if (!lookUp[string[i]]){
      stack.push(string[i])
    }else if (string[i] === '}' || string[i] === ']' || string[i] === ')'){
      const lastToEnter = stack.pop()
      if(lookUp[string[i]] !== lastToEnter) return false
    }
  }
  if (stack.length === 0) return true
  return false
}
console.log(matchingBrackets('{([])}'))
console.log(matchingBrackets('{([])]'));
console.log(matchingBrackets('{([)]}'));
console.log(matchingBrackets('{[]()}'));
// === '{' || string[i] === '[' || string[i] === '('
