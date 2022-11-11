const minToRemoveToMakeValid = str => {
  const res = str.split('');
  const stack = [];
  let i;
  for (i = 0; i < res.length; i++){
    if (res[i] == '('){
      stack.push(i);
    }else if (res[i] == ')' && stack.length){
      stack.pop();
    }else if (res[i] === ')'){
      res[i] = "";
    }
  }

  while (stack.length){
    const currentIdx = stack.pop();
    res[i] = "";
  }
  return res.join("");
}

console.log(minToRemoveToMakeValid('a)bc(d)'));
console.log(minToRemoveToMakeValid('(ab(c)d'));
console.log(minToRemoveToMakeValid('))(( '));
