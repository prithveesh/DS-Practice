var isPalindrome = function(s) {
  let b = 0, e = s.length - 1, r = true;
  s = s.toLowerCase();
  while(s < e) {
      if(s[b] === s[e]) {
          b++;e--;
      } else {
          const bv = checkValid(s[b]);
          const ev = checkValid(s[e]);
          if(ev && bv) return false;
          if(!ev) e--;
          if(!bv) b++;
      }
  }
  return true;
};

var checkValid = function(c) {
  const code = c.charCodeAt(0);
  if(code >= 48 && code <= 57) return true;
  if(code >= 65 && code <= 90) return true;
  if(code >= 97 && code <= 122) return true;
  return false;
}

console.log(isPalindrome('race a car'));