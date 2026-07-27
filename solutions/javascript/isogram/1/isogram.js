//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  let result = [];
  for (const char of word.toLowerCase()) {
    if (char === " " || char === "-") continue;
    
    if (result.includes(char)) {
      return false
    }
    else {
      result.push(char)
    }
  }
  return true
};
