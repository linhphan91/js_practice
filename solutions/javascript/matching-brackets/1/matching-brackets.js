//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  const map = {
    "]" : "[",
    "}" : "{",
    ")" : "("
  }
  const stack = [];

  for (const char of string) {
    if (char === '{' || char === '[' || char === '('){
      stack.push(char)
    }
    else if (map[char])
      if (stack.length === 0 || stack.pop() !== map[char]){
        return false
      }
  }
  return stack.length === 0;
};


