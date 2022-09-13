const backspaceString = (s, t) => {
  let p1 = s.length - 1, p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0){
    if (s[p1] === "#" || t[p2] === "#"){
      if (s[p1] === "#"){
        let backCount = 2;
        while (backCount > 0){
          p1--;
          backCount--
          if(s[p1] === "#"){
            backCount += 2;
          }
        }
      }
      if (t[p2] === "#"){
        let backCount = 2;
        while (backCount > 0){
          p2--;
          backCount --;
          if (t[p2] === "#") {
            backCount += 2;
          }
        }
      }
    }

    else {
      if (s[p1] !== t[p2]) return false
      p1--;
      p2--;
    }
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
