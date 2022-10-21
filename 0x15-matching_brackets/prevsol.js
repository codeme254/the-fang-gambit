const validParentheses = str => {
  const stack = [];
  let i = 0;
  while (i < str.length){
    if (str[i] === '{' || str[i] === '[' || str[i]==='('){
      stack.push(str[i]);
      i++;
    }else if(str[i] === '}' || str[i] === ']' || str[i]===')'){
      let lastToEnter = stack.pop();
      if (lastToEnter === '{' && str[i] === '}')i++;
      else if (lastToEnter === '[' && str[i] === ']')i++;
      else if (lastToEnter === '(' && str[i] === ')')i++;
      else return false;
    }
  }
  return stack.length === 0;
}
