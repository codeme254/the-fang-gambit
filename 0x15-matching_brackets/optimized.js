const matchingBrackets = s => {
  const parens = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  if (s.length === 0) return true
  const stack = []
  for (let i = 0; i < s.length; i++){
    if(parens[s[i]]) stack.push(s[i])
    else{
      const leftBracket = stack.pop()
      const correctBracket = parens[leftBracket]
      if (s[i] !== correctBracket) return false
    }
  }
  return stack.length === 0;
}

console.log(matchingBrackets('{([])}'))
console.log(matchingBrackets('{([])]'))
console.log(matchingBrackets('{([)]}'))
console.log(matchingBrackets('{[]()}'))
