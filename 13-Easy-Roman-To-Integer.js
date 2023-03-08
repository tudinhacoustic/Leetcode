const s = "XI";
const romanToInt = function (s) {
  const ro = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let n = ro[s[s.length-1]];
  for (let i=s.length-2;i>=0;i-=1) {
    if (ro[s[i]]>=ro[s[i+1]]) {
      n+=ro[s[i]];
    } else {
      n-=ro[s[i]];
    }
  }
  return n;
};
const result = romanToInt(s);
console.log(result);