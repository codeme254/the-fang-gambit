const backspaceString = (s, t) => {
  const sStrArr = [];
  const tStrArr = [];

  for (let i = 0; i < s.length; i++){
    s[i] === "#" ? sStrArr.pop() : sStrArr.push(s[i]);
  }

  for (let i = 0; i < t.length; i++){
    t[i] === "#" ? tStrArr.pop() : tStrArr.push(t[i]);
  }

  if (sStrArr.length != tStrArr.length) return false;

  for (let i = 0; i < sStrArr.length; i++){
    if (sStrArr[i] !== tStrArr[i]) return false;
  }

  return true;
}

console.log(backspaceString("ab#z", "az#z"));;
console.log(backspaceString("ab###z", "az#z"));;
console.log(backspaceString("abc#d", "acc#c"));
console.log(backspaceString("x#y#z#", "a#"));
console.log(backspaceString("a###b", "b"));
console.log(backspaceString("Ab#z", "ab#z"));
console.log(backspaceString("", "ab#z"));
