var isOneEditDistance = function(s, t) {
  if(s === t) return false;
  let ls = s.length - 1;
  let lt = t.length - 1;
  if(Math.abs(ls - lt) > 1) return false;
  let count = 0, i = 0, j = 0, isEdit = !Math.abs(ls - lt);

  while((ls >= i && lt >= j)) {
    const sc = s[i];
    const tc = t[j];
    if(sc !== tc) {
      if(count) return false;
      count = 1;
      if(!isEdit){
        ls > lt ? i++ : j++;
        continue;
      }
    }
    
    i++;j++;
  }

  if(count + ls - i + lt - j + 2 === 1) return true;
  return false;
}

console.log(isOneEditDistance('cab', 'ca'));
console.log(isOneEditDistance('', ''));
console.log(isOneEditDistance('abc', 'abd'));
console.log(isOneEditDistance('cab', 'aca'));
console.log(isOneEditDistance('ab', 'ba'));
console.log(isOneEditDistance('ac', 'abc'));