// 1-  CHECK FOR VALID PARENTHESIS - 20

var isValid = function(s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack = [];

  for (const char of s) {
    if (map[char]) {
      stack.push(map[char]); // push expected closing bracket
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};



// 2 -  GENERATE PARENTHISIS

